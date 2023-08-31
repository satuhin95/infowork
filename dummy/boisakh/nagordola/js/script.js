let topOffer = document.querySelector('.offer_1');
let rightOffer = document.querySelector('.offer_2');
let bottomOffer = document.querySelector('.offer_3');
let leftOffer = document.querySelector('.offer_4');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');
let twoGb = document.querySelector('.two_gb');
let fiveGb = document.querySelector('.five_gb');
let sixGb = document.querySelector('.six_gb');
let mb = document.querySelector('.mb');
let button = document.querySelector('.button');
let slide_1 = [...document.querySelectorAll('.slide_1 img')];
let offers= [...document.querySelectorAll(".container2 img")];

topOffer.addEventListener('click', topOfferF);
rightOffer.addEventListener('click', rightOfferF);
bottomOffer.addEventListener('click', bottomOfferF);
leftOffer.addEventListener('click', leftOfferF);

slide_1.map(e=>{e.className != 'wheel_animate' ? ((e.style.width="60px"),(e.style.height="60px")) : ''});

let links= [
'https://purplepatch.online/currents',
'https://purplepatch.online/currents',
'https://purplepatch.online/currents',
'https://purplepatch.online/currents'
];

var link='';

function topOfferF() {
    offers.map(e=> {e.className != 'button' ? e.className = e.className.replace('fadeIn', 'hidden') : ''});
    container2.className = container2.className.replace('hidden', ' ');
    container1.style.display = "none";
    twoGb.className = twoGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1e3)
    link=links[3];
}

function rightOfferF() {
    offers.map(e=> {e.className != 'button' ? e.className = e.className.replace('fadeIn', 'hidden') : ''});
    container2.className = container2.className.replace('hidden', ' ');
    container1.style.display = "none";
    fiveGb.className = fiveGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1e3)
    link=links[2];
}


function bottomOfferF() {
    offers.map(e=> {e.className != 'button' ? e.className = e.className.replace('fadeIn', 'hidden') : ''});
    container2.className = container2.className.replace('hidden', ' ');
    container1.style.display = "none";
    sixGb.className = sixGb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1e3)
    link=links[1];
}

function leftOfferF() {
    offers.map(e=> {e.className != 'button' ? e.className = e.className.replace('fadeIn', 'hidden') : ''});
    container2.className = container2.className.replace('hidden',' ');
    container1.style.display = "none";
    mb.className = mb.className.replace('hidden', 'fadeIn');
    setTimeout(function () {
        button.style.display = "block";
    },1e3)
    link=links[0];
}

button.addEventListener("click",()=>window.open(link,"_blank"));

container2.onclick = function () {
    container1.style.display = "block";
    container2.classList ? container2.classList.add('hidden') : container2.className += ' hidden';
}


