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

let rightImg = '';

for (let i = 0; i < items.length; i++) {

    rightImg += `<div class="picture"> 
                    <img src="${items[i]}" alt="">
                </div>`;
}

let block2 = document.querySelector('.block2');
block2.innerHTML = rightImg;

let opa = document.getElementsByClassName('picture');
opa[0].classList.add('active2');


let slider = '';

for (let i = 0; i < items.length; i++) {

    slider +=   `<div class="bk"> 
                    <img src="${items[i]}" alt="">
                    <div id="text">
                        <h1>${title[i]}</h1>
                        <h4>${text[i]}</h4>
                    </div>
                </div>`;
}

let itemSlider = document.querySelector('.block1');
itemSlider.innerHTML = slider;

let currentSlide = 0;

let bk = document.getElementsByClassName('bk');
bk[0].classList.add('active');
