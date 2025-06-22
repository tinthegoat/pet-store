const pets = [
    {
        "name": "Buddy",
        "type": "Dog",
        "age": 5,
        "img": "images/dogs/dog01.jpg"
    },
    {
        "name": "Diggy",
        "type": "Dog",
        "age": 2,
        "img": "images/dogs/dog02.jpg"
    },
    {
        "name": "Browny",
        "type": "Dog",
        "age": 4,
        "img": "images/dogs/dog03.jpg"
    },
    {
        "name": "Whiskers",
        "type": "Cat",
        "age": 3,
        "img": "images/cats/cat01.jpg"
    },
    {
        "name": "Mittens",
        "type": "Cat",
        "age": 3,
        "img": "images/cats/cat02.jpg"
    },
    {
        "name": "Georgie",
        "type": "Cat",
        "age": 6,
        "img": "images/cats/cat03.jpg"
    },
    {
        "name": "Capy",
        "type": "Capybara",
        "age": 3,
        "img": "images/capybaras/capybara01.jpg"
    },
    {
        "name": "Bara",
        "type": "Capybara",
        "age": 4,
        "img": "images/capybaras/capybara02.jpg"
    },
    {
        "name": "Leonardo",
        "type": "Bird",
        "age": 1,
        "img": "images/birds/bird01.jpg"
    },
    {
        "name": "Davinci",
        "type": "Bird",
        "age": 2,
        "img": "images/birds/bird02.jpg"
    }
];

function loadPets() {
    console.log("Loading pets!")
    const petList = document.getElementById("pet-list");
    pets.forEach(pet => {
        const newPet = document.createElement('div');
        newPet.className = 'pet';
        newPet.innerHTML =
        `
        <img src = "${pet.img}" alt = "${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age}</p>
        <button onclick="adoptPet()">Adopt Now</button>
        `;
        petList.append(newPet)
    })

    $('input[name="pet-type"]').on("change", function () {
        filterPets();
    });
}

function filterPets() {
    console.log("Selected pet type:", $('input[name="pet-type"]:checked').val())
    const types = $('input[name="pet-type"]:checked')
    .map(function () {
        return $(this).val();
    })
    .get();

    console.log(types);
    const filteredPets = pets.filter((pet) => types.includes(pet.type));
    console.log(filterPets);

    const petList = $("#pet-list");
    petList.empty();

    filteredPets.forEach((pet) => {
        const petItem = $("<div>").addClass("pet").html(`
        <img src = "${pet.img}" alt = "${pet.name}">
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age}</p>
        <button onclick="adoptPet()">Adopt Now</button>
        `);
        petList.append(petItem);
    });
}



$(document).ready(loadPets);
console.log("Pets loaded pawfectly!")