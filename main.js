//title Change using dom

document.title = 'Appiness';


//Heading Change using DOM
var header = document.getElementById('txt');

header.textContent = 'Testimonials'

//changing innerhtml

header.innerHTML = '<h3>Testimonials</h3>'


//playing with parent node

var items = document.querySelector('.section__main2');
console.log(items.parentNode);
items.parentNode.style.backgroundColor = 'white';