axios.get('https://ghibli.rest/films')
    .then(response => {
        /* obtenemos lista de peliculas */
        const films = response.data;
        console.log(films)

        /* añadir las peliculas al html */
        const ghibliData = document.getElementById('ghibli-data');

        films.forEach(film => {

            ghibliData.innerHTML += `
                <div class="ghibliDiv" onclick="showPopup('${film.title}', '${film.original_title}', '${film.director}', ${film.release_date}, ${film.running_time}, '${film.image}')"> 
                    <h2 id=""> ${film.title}</h2> 
                    <div class="imgContainer">
                        <img id="filmImg" src="${film.image}" alt="${film.title}" style="max-width: 300px">
                    </div>   
                </div> 
            `;

        });

    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

function showPopup(title, original_title, director, releaseDate, runningTime, image) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupOriginalTitle = document.getElementById('popup-Originaltitle');
    const popupDirector = document.getElementById('popup-director');
    const popupReleaseDate = document.getElementById('popup-release-date');
    const popupRunningTime = document.getElementById('popup-running-time');
    const popupImage = document.getElementById('popup-image');

    popupTitle.innerHTML = `<h2>${title}</h2>`;
    popupOriginalTitle.innerHTML = `<h2>${original_title}</h2>`;
    popupDirector.innerHTML = `<h3><strong>Director:</strong></h3> <p>${director}</p>`;
    popupReleaseDate.innerHTML = `<h3><strong>Año de lanzamiento:</strong></h3> <p>${releaseDate}</p>`;
    popupRunningTime.innerHTML = `<h3><strong>Duración:</strong></h3> <p>${runningTime} minutos</p>`;
    popupImage.src = image;
    popup.style.display = 'block';
}


function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


