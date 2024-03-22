let elements = ['gotoHead()', 'gotoSearch()', 'gotExplenation()'];



elements.forEach(
    function elements(elem,ind,arr){
        // Creazione Voce menu
            var elem = document.createElement('button');
        // Inserimento attributi Voce menu
            eval(elem).setAttribute('id', `menuI${ind}`);
            eval(elem).setAttribute('class', 'menu-item');
            eval(elem).setAttribute('onclick', `${arr[ind]}`);
        // Inserimento Voce menu nella pagina
            document.body.querySelector('nav').append(eval(elem));
    }   
);

document.addEventListener('DOMContentLoaded', function(){
    header.scrollIntoView(top=true);
    document.querySelectorAll('.menu-item')[0].style.width = "17px";
    document.querySelectorAll('.menu-item')[0].style.height = "17px";
});

function gotoHead(){
    header.scrollIntoView(top=true);
    document.querySelectorAll('.menu-item')[0].style.width = "17px";
    document.querySelectorAll('.menu-item')[0].style.height = "17px";
    document.querySelectorAll('.menu-item')[1].style.width = "10px";
    document.querySelectorAll('.menu-item')[1].style.height = "10px";
}

function gotoSearch(){
    searchSection.scrollIntoView(top=true);

    if(searchSection.getBoundingClientRect().bottom=true){
        document.querySelectorAll('.menu-item')[1].style.width = "17px";
        document.querySelectorAll('.menu-item')[1].style.height = "17px";
        document.querySelectorAll('.menu-item')[0].style.width = "10px";
        document.querySelectorAll('.menu-item')[0].style.height = "10px";
    }
}
