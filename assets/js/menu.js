let elements = ['header', 'search', 'explain'];
elements.forEach(
    function elements(elem,ind,arr){
        // Creazione Voce menu
            var elem = document.createElement('button');
        // Creazione Funzione menu
            var jump = function (){
                document.querySelector(`#${arr[ind]}-section`).scrollIntoView(top=true);
                for(let i = 0; i < arr.length; i++){
                    document.querySelectorAll('.menu-item')[i].style.width = "10px";
                    document.querySelectorAll('.menu-item')[i].style.height = "10px";
                }
                document.querySelectorAll('.menu-item')[ind].style.width = "17px";
                document.querySelectorAll('.menu-item')[ind].style.height = "17px";
            };
        // Inserimento attributi Voce menu
            eval(elem).setAttribute('id', `menuI${ind}`);
            eval(elem).setAttribute('class', 'menu-item');
        // Inserimento Voce menu nella pagina
            document.body.querySelector('nav').append(eval(elem));
            document.querySelector(`#menuI${ind}`).addEventListener('click', jump);
    }   
);

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('header').scrollIntoView(top=true);
    document.querySelectorAll('.menu-item')[0].style.width = "17px";
    document.querySelectorAll('.menu-item')[0].style.height = "17px";
});