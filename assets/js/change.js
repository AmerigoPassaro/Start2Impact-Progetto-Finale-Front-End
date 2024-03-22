let changeButton = document.createElement('button');
changeButton.setAttribute('id', 'change-button');
changeButton.innerHTML = 'Use coordinates';
document.querySelector('#place-select').after(changeButton);

function myChange(){
    controllo = !controllo;
    if(!controllo){
        document.querySelector('#search-form').querySelectorAll('.search-label')[0].innerHTML = 'coordinates';
        document.querySelector('#place-select').remove();
        
        document.querySelectorAll('.search-label')[0].after(containerLL);
        document.querySelector('#container-lon-lat').append(lon1);
        document.querySelector('#container-lon-lat').append(lat1);
        document.querySelector('#container-lon-lat').append(lon2);
        document.querySelector('#container-lon-lat').append(lat2);

        changeButton.innerHTML = 'Use name country';

    } else {
        document.querySelector('#container-lon-lat').remove();
        document.querySelector('#search-form').querySelectorAll('.search-label')[0].innerHTML = 'country';
        document.querySelector('#search-form').querySelectorAll('.search-label')[0].after(placeSelect);

        changeButton.innerHTML = 'Use coordinates';

    }
}

// Eliminazione comportamento base form ed Inserimento nuovo comportamento
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#change-button').addEventListener('click', function(e){
        e.preventDefault();
        myChange();
    });
});