document.addEventListener('DOMContentLoaded', function() {
    fetchData();
});

function fetchData() {
    axios.get('https://ghibli.rest/films')
        .then(response => {
            const films = response.data;
            const ghibliData = document.getElementById('ghibli-data');
            const directorsSet = new Set();

            films.forEach(film => {
                directorsSet.add(film.director);
            });

            const directorsArray = Array.from(directorsSet);

            directorsArray.forEach(director => {
                ghibliData.innerHTML += `<div class="ghibliDiv" onclick="showFilmsByDirector('${director}')">${director}</div>`;
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
}

function showFilmsByDirector(director) {
    axios.get('https://ghibli.rest/films')
        .then(response => {
            const films = response.data;
            console.log(response.data);
            const filteredFilms = films.filter(film => film.director === director);

            const popup = document.getElementById('popup');
            const popupContent = document.querySelector('.popup-content');

            // Limpiar el contenido del popup
            popupContent.innerHTML = '';
            // Crear el botón de cierre
            const closeButton = document.createElement('span');
            closeButton.classList.add('close');
            closeButton.innerHTML = '&times;';
            closeButton.addEventListener('click', closePopup);
            popupContent.appendChild(closeButton);

            // Iterar sobre las películas filtradas
            filteredFilms.forEach(film => {
                // Crear elementos HTML para los detalles de la película
                const filmTitle = document.createElement('h2');
                filmTitle.textContent = film.title;

                const originalTitle = document.createElement('h3');
                originalTitle.innerHTML = `<strong>Original Title:</strong> <span>${film.original_title}</span>`;

                const originalTitleRomanized = document.createElement('h3');
                originalTitleRomanized.innerHTML = `<strong>Original Title Romanized:</strong> <span>${film.original_title_romanised}</span>`;

                const description = document.createElement('h3');
                description.innerHTML = `<strong>Description:</strong> <span>${film.description}</span>`;

                const movieBanner = document.createElement('img');
                movieBanner.src = film.movie_banner;
                movieBanner.alt = film.title;
                movieBanner.style.maxWidth = '300px';

                // Agrupar todos los elementos en un div
                const filmDetailsDiv = document.createElement('div');
                filmDetailsDiv.classList.add('film-details');
                filmDetailsDiv.appendChild(filmTitle);
                filmDetailsDiv.appendChild(originalTitle);
                filmDetailsDiv.appendChild(originalTitleRomanized);
                filmDetailsDiv.appendChild(description);
                filmDetailsDiv.appendChild(movieBanner);

                // Agregar el div de detalles de la película al contenido del popup
                popupContent.appendChild(filmDetailsDiv);
            });

            // Mostrar el popup
            popup.style.display = 'block';
            document.body.classList.add('popup-visible');
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-visible');
}