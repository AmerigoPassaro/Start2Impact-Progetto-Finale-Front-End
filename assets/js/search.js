let arr = ['Agrigento', 'Catania', 'Palermo'];

document.addEventListener("DOMContentLoaded", function(){
	document.forms[0].addEventListener("submit", function(e){
		e.preventDefault();
		search();
	});
});


let searchForm = document.createElement('form');
let placeSelect = document.createElement('select');
let startDate = document.createElement('input');
let endDate = document.createElement('input');
let searchButton = document.createElement('input');
let prova = document.createElement('button');

searchForm.setAttribute('id', 'search-form');
placeSelect.setAttribute('id', 'place-select');
startDate.setAttribute('type', 'date');
startDate.setAttribute('id', 'start-date');
startDate.setAttribute('class', 'place-date');
endDate.setAttribute('type', 'date');
endDate.setAttribute('id', 'end-date');
endDate.setAttribute('class', 'place-date');
searchButton.setAttribute('type', 'submit');
searchButton.setAttribute('id', 'search-button');
prova.setAttribute('onclick', 'search()');

prova.innerHTML = "Prova";

document.body.querySelector('main').append(searchForm);
document.body.querySelector('#search-form').prepend(placeSelect);

for(let i = 0; i < arr.length; i++){
    let placeOption = document.createElement('option');
    placeOption.setAttribute('value', `${arr[i]}`);
    placeOption.innerHTML = `${arr[i]}`;
    document.body.querySelector('#place-select').append(placeOption);
}

document.body.querySelector('#place-select').after(startDate);
document.body.querySelector('#start-date').after(endDate);
document.body.querySelector('#end-date').after(searchButton);
document.body.querySelector('#search-button').after(prova);



