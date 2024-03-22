let sections = ['search'];
sections.forEach(
    function section(elem,ind,arr){
        // Creazione Section
            var elem = document.createElement('section');
        // // Inserimento attributi Section
            elem.setAttribute('id', `${arr[ind]}-section`);
        // Inserimento Section nella pagina
            document.body.querySelector('main').append(elem);
    }   
);