function fetchPeopleData() {
    axios.get('https://ghibli.rest/people')
        .then(response => {
            const people = response.data;
            console.log(people)
            const ghibliData = document.getElementById('ghibli-data');

            people.forEach(person => {
                const personDiv = document.createElement('div');
                personDiv.classList.add('personDiv');
                personDiv.innerHTML = `
                    <h2>${person.name}</h2>
                    <p>Age: ${person.age}</p>
                    <p>Eye Color: ${person.eye_color}</p>
                    <p>Gender: ${person.gender}</p>
                    <p>Hair Color: ${person.hair_color}</p>
                `;

                // Agregar el elemento a la página
                ghibliData.appendChild(personDiv);

                // Añadir evento de clic para mostrar los detalles de la persona
                personDiv.addEventListener('click', function() {
                    showPersonDetails(person);
                });
            });
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
}

function showPersonDetails(person) {
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

    // Crear elementos HTML para los detalles de la persona
    const personName = document.createElement('h2');
    personName.textContent = person.name;

    const personAge = document.createElement('p');
    personAge.textContent = `Age: ${person.age}`;

    const eyeColor = document.createElement('p');
    eyeColor.textContent = `Eye Color: ${person.eye_color}`;

    const gender = document.createElement('p');
    gender.textContent = `Gender: ${person.gender}`;

    const hairColor = document.createElement('p');
    hairColor.textContent = `Hair Color: ${person.hair_color}`;

    // Agrupar todos los elementos en un div
    const personDetailsDiv = document.createElement('div');
    personDetailsDiv.classList.add('person-details');
    personDetailsDiv.appendChild(personName);
    personDetailsDiv.appendChild(personAge);
    personDetailsDiv.appendChild(eyeColor);
    personDetailsDiv.appendChild(gender);
    personDetailsDiv.appendChild(hairColor);

    // Agregar el div de detalles de la persona al contenido del popup
    popupContent.appendChild(personDetailsDiv);

    // Mostrar el popup
    popup.style.display = 'block';
    document.body.classList.add('popup-visible');
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.body.classList.remove('popup-visible');
}

document.addEventListener('DOMContentLoaded', function() {
    fetchPeopleData();
});
