let elements = ['gotoHead()', 'gotoMain()'];

function gotoHead(){
    window.scrollTo(0,0);
}

function gotoMain(){
    main.scrollIntoView(top=true);
}


for(let i = 0; i < elements.length; i++){
    let menuItem = document.createElement('button');
    menuItem.setAttribute('id',`menuI${i}`);
    menuItem.setAttribute('onclick',`${elements[i]}`);
    menuItem.setAttribute('class','menu-item');
    document.body.querySelector('nav').append(menuItem);
}

