axios.get('https://ghibli.rest/films')
    .then(response => {
        /* obtenemos lista de peliculas */
        const films = response.data;

        /* añadir las peliculas al html */
        const ghibliDiv = document.getElementById('ghibli-data');

        films.forEach(film => {

            ghibliDiv.innerHTML += `
            
                <div> 

                    <img src="${film.image}" alt="${film.title}" style="max-width: 300px">
                        <h2> ${film.title}</h2> 
                </div> 

            `;

        });

    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

