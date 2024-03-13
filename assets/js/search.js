let arr = ['Agrigento', 'Catania', 'Palermo'];

document.addEventListener("DOMContentLoaded", function(){
	document.forms[0].addEventListener("submit", function(e){
		e.preventDefault();
		search();
	});
});

// Creazione Form e Contenuto
    let searchForm = document.createElement('form');
        let placeSelect = document.createElement('input');
            let placeList = document.createElement('datalist');
        let startDate = document.createElement('input');
        let endDate = document.createElement('input');
        let searchButton = document.createElement('input');


// Attributi Form Search
    searchForm.setAttribute('id', 'search-form');
// Attributi Select Place
    placeSelect.setAttribute('type', 'search');
    placeSelect.setAttribute('id', 'place-select');
    placeSelect.setAttribute('list', 'place-list');
// Attributo List Place
    placeList.setAttribute('id', 'place-list');
// Attributi Input Start Date
    startDate.setAttribute('type', 'date');
    startDate.setAttribute('id', 'start-date');
    startDate.setAttribute('class', 'place-date');
// Attributi Input End Date
    endDate.setAttribute('type', 'date');
    endDate.setAttribute('id', 'end-date');
    endDate.setAttribute('class', 'place-date');
// Attributi Submit Search
    searchButton.setAttribute('type', 'submit');
    searchButton.setAttribute('id', 'search-button');


// Inserimento Form
    document.body.querySelector('main').append(searchForm);
// Inserimento Contenuto Form  1/2  
    document.body.querySelector('#search-form').prepend(placeSelect);
    document.body.querySelector('#place-select').after(placeList);

// Inserimento Voci Lista
    fetch('https://api.v2.emissions-api.org/api/v2/countries.json')
    .then(response => response.json())
    .then(commits => { 
        for (let i = 0; i < Object.keys(commits).length; i++){
            let placeOption = document.createElement('option');
            placeOption.setAttribute('value', `${Object.values(commits)[i]}`);
            document.body.querySelector('#place-list').append(placeOption);
        }
    });

// Inserimento Contenuto Form  2/2 
    document.body.querySelector('#place-list').after(startDate);
    document.body.querySelector('#start-date').after(endDate);
    document.body.querySelector('#end-date').after(searchButton);



