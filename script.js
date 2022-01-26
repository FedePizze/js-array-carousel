const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


let up = document.getElementById('arrowUp')
let down = document.getElementById('arrowDown')

let x = 0;

// CAMBIANO IMMAGINI BLOCCO 1
let slider = ''
let rightImg = ''
for (let i = 0; i < items.length; i++) {
    slider +=   `<div class="bk"> 
                    <img src="${items[i]}" alt="">
                    <div id="text">
                        <h1>${title[i]}</h1>
                        <h4>${text[i]}</h4>
                    </div>
                </div>`;

    rightImg += `<div class="picture"> 
                    <img src="${items[i]}" alt="">
                </div>`;
}

// INSERISCO IMMAGINI NELL'HTML
let itemSlider = document.querySelector('.block1');
itemSlider.innerHTML = slider
// AGGIUNGO LA CLASSE ACTIVE
let bk = document.getElementsByClassName('bk');
bk[x].classList.add('active')

// -----------------------------------------------------------


// INSERISCO IMMAGINI NELL'HTML
let block2 = document.querySelector('.block2');
block2.innerHTML = rightImg
// AGGIUNGO LA CLASSE ACTIVE2
let opa = document.getElementsByClassName('picture');



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("bk");
  var border = document.getElementsByClassName("picture");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < border.length; i++) {
    border[i].className = border[i].className.replace("active2");
  }
  x[slideIndex-1].style.display = "block";  
  border[slideIndex-1].className += " active2";
}