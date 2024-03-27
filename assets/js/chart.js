function emissionChart(){

    let chart = document.createElement('div');
    let yAxis = document.createElement('div');
    let yValues = document.createElement('div');
    let zeroBox = document.createElement('div');

    let containerChart = document.createElement('div');

    chart.setAttribute('id', 'chart');
    yAxis.setAttribute('id', 'y-axis');
    yValues.setAttribute('id', 'y-axis-values');
    containerChart.setAttribute('class', 'container-graphic');

    document.querySelector('#dashboard').after(chart);
    document.querySelector('#chart').append(yAxis);
    document.body.querySelector('#y-axis').append(yValues);


    let yNumber = [10, 20, 30, 40, 50, 60]
    yNumber.forEach( 
        function insertYValue (elem, ind, arr){
            // Creazione Valore asse Y
            var elem = document.createElement('div');
            // Inserimento attributi Valore asse Y
                eval(elem).setAttribute('class', 'value');
            // Inserimento testo Valore asse Y
                eval(elem).innerHTML = arr[ind];
            // Inserimento Valore asse Y nella pagina
                document.querySelector('#y-axis-values').prepend(eval(elem));
        }
    );

    document.body.querySelector('#y-axis-values').after(zeroBox);
    document.body.querySelector('#y-axis').after(containerChart);

    let rettangles = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto'];
    let emissions = [100, 150, 50, 250, 150, 100];
    rettangles.forEach( 
        function insertEmission (elem, ind, arr){
            // Creazione Rettangolo
                var elem = document.createElement('div');
                var rettangle = document.createElement('div');
            // Inserimento attributi Rettangolo
                eval(elem).setAttribute('class', 'container-rettangle');
                rettangle.setAttribute('class', 'emission');
                rettangle.setAttribute('id', `${arr[ind]}`);
            // Alterazione stile Rettangolo
                rettangle.style.height = `${emissions[ind]}px`;
            // Inserimento Rettangolo nella pagina
                document.querySelector('.container-graphic').append(eval(elem));
                document.querySelectorAll('.container-rettangle')[ind].append(rettangle);

        }
    );

    let dates = ['01/01/2020', '01/02/2020', '01/03/2020', '01/04/2020', '01/05/2020', '01/06/2020']
    dates.forEach( 
        function insertDate (elem, ind, arr){
            // Creazione Data
                var elem = document.createElement('div');
            // Inserimento attributi Data
                eval(elem).setAttribute('class', 'date');
            // Inserimento testo Data
                eval(elem).innerHTML = arr[ind];
            // Inserimento Data nella pagina
                document.querySelector('.container-graphic').append(eval(elem));
        }
    );

}