function search(){

    // Estrapolazione Dati
        let nation = placeSelect.value.substring(0, placeSelect.value.indexOf(' '));
        let coo = [lon1.value, lat1.value, lon2.value, lat2.value];
        let title = (controllo) ? placeSelect.value.match(/\(([^)]+)\)/)[1] : `${coo[0]}, ${coo[1]}, ${coo[2]}, ${coo[3]}`;
        let startDate = document.querySelector('#start-date').value; 
        let endDate = document.querySelector('#end-date').value; 
        let emissionSelect = document.querySelector('input[name="emissions"]:checked');

        document.querySelector('#search-section').innerHTML = "";

    // Creazione Dashboard
        let dashboard = document.createElement('div');
            let placeTitle = document.createElement('h3');

    // Inserimento Dati
        placeTitle.innerHTML = title;
    // Attributi Dashboard
        dashboard.setAttribute('id', 'dashboard');
    // Inserimento Dashboard
        document.body.querySelector('#search-section').append(dashboard);
        document.body.querySelector('#dashboard').prepend(placeTitle);

    // Link di collegamento
        let link = (controllo) ? `https://api.v2.emissions-api.org/api/v2/${emissionSelect.value}/average.json?country=${nation}&begin=${startDate}&end=${endDate}&limit=1&offset=0` : `https://api.v2.emissions-api.org/api/v2/${emissionSelect.value}/average.json?geoframe=${coo[0]}&geoframe=${coo[1]}&geoframe=${coo[2]}&geoframe=${coo[3]}&begin=${startDate}&end=${endDate}&limit=100&offset=0` ;

    // Ottenimento Dati
        fetch(link, {
            method: 'GET',
            headers: {
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(commits => {
            let ave = document.createElement('span');
            ave.innerHTML = commits[0].average;
            document.body.querySelector('h3').after(ave);
        });

    // Info emmissione
        fetch('https://api.v2.emissions-api.org/api/v2/products.json')
        .then(response => response.json())
        .then(commits => {
            let emissionName = document.createElement('h4');
            let emissionDes = document.createElement('p');
            emissionName.innerHTML = commits[emissionSelect.id].name;
            emissionDes.innerHTML = commits[emissionSelect.id].description;
            document.body.querySelector('h3').after(emissionName);
            document.body.querySelector('h4').after(emissionDes);
        });
        
        emissionChart();
    }