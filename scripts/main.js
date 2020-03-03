let heading = document.querySelector('h1');

document.getElementById('logo').onclick = function() {
    alert('You will find your way.');
}

let fox = document.getElementById('Fox');
let foxCounter = 1;
fox.onmouseenter = function() {
    $("h2").text("Foxie");
}
fox.onclick = function() {
    foxCounter %= 7;
    foxCounter++;
    fox.setAttribute('src', 'images/Fox/' + foxCounter + '.jpg');
    switch(foxCounter) {
        case 1: fox.setAttribute('alt', 'First Fox');
        case 2: fox.setAttribute('alt', 'Second Fox');
        case 3: fox.setAttribute('alt', 'Third Fox');
        case 4: fox.setAttribute('alt', 'Fourth Fox');
        case 5: fox.setAttribute('alt', 'Fifth Fox');
        case 6: fox.setAttribute('alt', 'Sixth Fox');
        case 7: fox.setAttribute('alt', 'Seventh Fox');
    }
}

let button = document.querySelector('button');
button.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem(name, myName);
        heading.textContent = 'Salvation-1, ' + myName + "!";
    }
}

// if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     let storedName = localStorage.getItem('name');
//     heading.textContent = 'Salvation-1, ' + storedName + "!";
// }