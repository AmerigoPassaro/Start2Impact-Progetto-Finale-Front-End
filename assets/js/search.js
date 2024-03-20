// Eliminazione comportamento base form ed Inserimento nuovo comportamento
    document.addEventListener('DOMContentLoaded', function(){
        document.forms[0].addEventListener('submit', function(e){
            e.preventDefault();
            search();
        });
    });

// Creazione Form e Contenuto
    let searchForm = document.createElement('form');
        let placeSelect = document.createElement('input');
            let placeList = document.createElement('datalist');
        let containerLL = document.createElement('div');
            let lon1 = document.createElement('input');
            let lat1 = document.createElement('input');
            let lon2 = document.createElement('input');
            let lat2 = document.createElement('input');
        let searchButton = document.createElement('input');

// Attributi Form Search
    searchForm.setAttribute('id', 'search-form');
// Attributi Select Place
    placeSelect.setAttribute('type', 'search');
    placeSelect.setAttribute('id', 'place-select');
    placeSelect.setAttribute('list', 'place-list');
// Attributo List Place
    placeList.setAttribute('id', 'place-list');
// Attributi Container Longitudine Latitudine
    containerLL.setAttribute('id', 'container-lon-lat');
// Attributi Input Lon e Lat
    lon1.setAttribute('class', 'coordinates-input');
    lat1.setAttribute('class', 'coordinates-input');
    lon2.setAttribute('class', 'coordinates-input');
    lat2.setAttribute('class', 'coordinates-input');
// Attributi Submit Search
    searchButton.setAttribute('type', 'submit');
    searchButton.setAttribute('id', 'search-button');
    searchButton.setAttribute('value', 'Search');
    
// Inserimento Form
    document.body.querySelector('main').append(searchForm);
// Inserimento Contenuto Form  1/2
    searchForm.insertAdjacentElement('afterbegin', placeSelect);
    document.body.querySelector('#place-select').after(placeList);
    searchForm.insertAdjacentElement('beforeend', searchButton);


    fetch('https://api.v2.emissions-api.org/api/v2/countries.json')
    .then(response => response.json())
    .then(commits => { 
        for (let i = 0; i < Object.keys(commits).length; i++){
            // Creazione voce List
                let placeOption = document.createElement('option');
            // Inserimento attirbuti voce List
                placeOption.setAttribute('value', `${Object.keys(commits)[i]} (${Object.values(commits)[i]})`);
                placeOption.setAttribute('name', `${Object.values(commits)[i]}`);
            // Inserimento List nella pagina
                document.body.querySelector('#place-list').append(placeOption);
        }
    });

    let date = ['end', 'start'];
    date.forEach(
        function dates(elem,ind,arr){
            // Creazione Date
                var elem = document.createElement('input');
            // Inserimento attributi Date
                eval(elem).setAttribute('type', 'date');
                eval(elem).setAttribute('id', `${arr[ind]}-date`);
                eval(elem).setAttribute('class', 'place-date');
            // Inserimento Date nella pagina
                document.body.querySelector('#place-list').after(eval(elem));
        }
    );

    let emission = ['methane', 'carbonmonoxide', 'ozone', 'nitrogendioxide'];
    emission.forEach(
        function emissions(elem,ind,arr){
            // Creazione Opzione
                var elem = document.createElement('input');
            // Inserimento attributi Opzione
                eval(elem).setAttribute('type', 'radio');
                eval(elem).setAttribute('id', ind);
                eval(elem).setAttribute('name', 'emissions');
                eval(elem).setAttribute('value', `${arr[ind]}`);
            // Inserimento Opzione nella pagina
                document.body.querySelector('#search-button').before(eval(elem));
        }   
    );

    let etichetta = ['contry', 'start date', 'end date', 'methane', 'carbonmonoxide', 'ozone', 'nitrogendioxide'];
    etichetta.forEach(
        function etichette(elem,ind,arr){
            // Creazione Label
                var elem = document.createElement('label');
            // // Inserimento attributi Label
                eval(elem).setAttribute('class', 'search-label');
            // // Inserimento testo Label
                eval(elem).innerHTML = arr[ind];
            // Inserimento Label nella pagina
                document.body.querySelectorAll('input')[ind].before(eval(elem));
        }   
    );