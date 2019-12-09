let heading = document.querySelector('h1');
let counter = 0;
heading.onclick = function() {
    if (counter===0) {
        heading.textContent += ': Begins!';
        counter++;
    }
    else {
        heading.textContent = 'Salvation-1';
        counter--;
    }
}

document.getElementById('logo').onclick = function() {
    alert('You will find your way.');
}