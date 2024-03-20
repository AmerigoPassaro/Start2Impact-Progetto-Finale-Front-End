let changeButton = document.createElement('button');
changeButton.setAttribute('id', 'change-button');
changeButton.innerHTML = 'Change';
document.querySelector('#search-form').after(changeButton);

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

    } else {
        document.querySelector('#container-lon-lat').remove();
        document.querySelector('#search-form').querySelectorAll('.search-label')[0].innerHTML = 'country';
        document.querySelector('#search-form').querySelectorAll('.search-label')[0].after(placeSelect);

    }
}

changeButton.addEventListener('click', myChange);