axios.get('https://ghibli.rest/films')
    .then(response => {
        const films = response.data;
        const ghibliData = document.getElementById('ghibli-data');
        const filteredFilms = films.filter(film => film.id !== 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e');


        filteredFilms.forEach(film => {
            console.log("id:", film.id)
            console.log("Title:", film.title);
            console.log("Original Title:", film.original_title);
            console.log("Director:", film.director);
            console.log("Release Date:", film.releaseDate);
            console.log("Running Time:", film.runningTime);
            console.log("Image:", film.image);

            ghibliData.innerHTML += `
                <div class="ghibliDiv" onclick="showPopup('${film.title}', '${film.original_title}', '${film.director}', '${film.release_date}', '${film.running_time}', '${film.image}')"> 
                    <h2>${film.title}</h2> 
                    <div class="imgContainer">
                        <img src="${film.image}" alt="${film.title}" style="max-width: 300px">
                    </div>   
                </div> 
            `;
        });
    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

function showPopup(title, original_title, director, releaseDate, runningTime, image) {
    console.log("Title:", title);
    console.log("Original Title:", original_title);
    console.log("Director:", director);
    console.log("Release Date:", releaseDate);
    console.log("Running Time:", runningTime);
    console.log("Image:", image);
    
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
    document.body.classList.add('popup-visible');
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-visible');
}

