function search(){

    // Estrapolazione Dati
        let nation = placeSelect.value.substring(0, placeSelect.value.indexOf(' '));
        let title = placeSelect.value.match(/\(([^)]+)\)/)[1];
        let startDate = document.querySelector('#start-date').value; 
        let endDate = document.querySelector('#end-date').value; 
        let emissionSelect = document.querySelector('input[name="emissions"]:checked').value;

    // Eliminazione del form
        document.querySelector('main').innerHTML = "";

    // Creazione Dashboard
        let dashboard = document.createElement('div');
            let ave = document.createElement('span');
            let placeTitle = document.createElement('h3');
    // Inserimento Dati
        placeTitle.innerHTML = title;
    // Attributi Dashboard
        dashboard.setAttribute('id', 'dashboard');
    // Inserimento Dashboard
        document.body.querySelector('main').append(dashboard);
        document.body.querySelector('#dashboard').prepend(placeTitle);

    // Link di collegamento
        let link = `https://api.v2.emissions-api.org/api/v2/${emissionSelect}/average.json?country=${nation}&begin=${startDate}&end=${endDate}&limit=1&offset=0`;
        console.log(startDate-31);
    // Ottenimento Dati
        fetch(link)
        .then(response => response.json())
        .then(commits => {
            ave.innerHTML = commits[0].average;
            document.querySelector('h3').after(ave);
        });
        

    }