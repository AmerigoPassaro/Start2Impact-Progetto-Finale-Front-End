let parts = ['header', 'nav', 'main', 'footer'];
parts.forEach(
    function part(elem,ind,arr){
        // Creazione Label
            var elem = document.createElement(`${elem}`);
        // Inserimento Label nella pagina
            document.body.append(elem);
    }   
);


let controllo = true;