axios.get('https://ghibli.rest/people')
    .then(response => {
        /* obtenemos lista de peliculas */
        const people = response.data;
        console.log(response.data); 

        /* añadir las peliculas al html */
        const ghibliDiv = document.getElementById('ghibli-data');


        axios.get('https://ghibli.rest/films')
        .then(response =>{
            const imageURL = response.data.image;
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
    

        people.forEach(person => {

            ghibliDiv.innerHTML += `
            
                <div> 

                    <img src="${imageURL}" alt="${person.name}" style="max-width: 300px">
                        <h2> ${person.name}</h2> 
                </div> 

            `;

        });

    })
    .catch(error => {
        console.error('Error al obtener datos de la API:', error);
    });

