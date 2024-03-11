axios.get('https://ghibli.rest/films')
    .then(response => {
        /* obtenemos lista de peliculas */
        const directors = response.data;
        console.log(response.data);

        /* añadir las peliculas al html */
        const ghibliDiv = document.getElementById('ghibli-data');

        directors.forEach(director => {

            ghibliDiv.innerHTML += `
            
                <div> 

                    <img src="${director.movie_banner}" alt="${director.director}" style="max-width: 300px">
                        <h2> ${director.director}</h2> 
                </div> 

            `;

        });

    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

