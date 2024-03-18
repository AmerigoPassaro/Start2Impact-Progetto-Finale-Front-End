function search(){

    // Eliminazione del form
        document.querySelector('main').innerHTML = "";

    // Estrapolazione Dati
        let nation = placeSelect.value.substring(0, placeSelect.value.indexOf(' '));
        let start = startDate.value; 
        let end = endDate.value;

    // Creazione Dashboard
        let dashboard = document.createElement('div');
            let average = document.createElement('span');
            let placeTitle = document.createElement('h3');
    // Inserimento Dati
        placeTitle.innerHTML = nation;
    // Attributi Dashboard
        dashboard.setAttribute('id', 'dashboard');
    // Inserimento Dashboard
        document.body.querySelector('main').append(dashboard);
        document.body.querySelector('#dashboard').prepend(placeTitle);

 
    // Link di collegamento
        let link = `https://api.v2.emissions-api.org/api/v2/methane/average.json?country=${nation}&begin=${start}&end=${end}&limit=1&offset=0`;


    // // Ottenimento Dati
    //     fetch(link)
    //     .then(response => response.json())
    //     .then(commits => {
    //         // average.innerHTML = commits[0].values(Object)[0];
    //         alert(typeof(Object(commits).Object.values))
    //     });
    //     document.querySelector("#dashboard").append(average);
    }