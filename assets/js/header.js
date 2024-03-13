// Creazione Titolo
    let containerTitle = document.createElement('div');
    let title = document.createElement('h1');
    let world = document.createElement('span');
    let emissions = document.createElement('span');
    let subTitle = document.createElement('h2');

// Inserimento testo nel Titolo
    world.innerHTML = 'world'.toUpperCase();
    emissions.innerHTML = 'emissions';
    subTitle.innerHTML = 'statistics'.toUpperCase();

// Attributi degli elementi
    containerTitle.setAttribute('id', 'container-title');
    world.setAttribute('id', 'world');
    emissions.setAttribute('id', 'emissions');

// Inserimento elementi nel titolo
    document.body.querySelector('header').prepend(containerTitle);
    document.body.querySelector('#container-title').prepend(title);
    document.body.querySelector('h1').prepend(world);
    document.body.querySelector('h1').append(emissions);
    document.body.querySelector('h1').after(subTitle);