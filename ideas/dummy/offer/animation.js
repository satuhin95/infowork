const wrapper= document.querySelector(".wrapper");
const mask1 = document.querySelector(".mask1");
const mask2 = document.querySelector(".mask2");
const maskFront = document.querySelector(".mask1 .front");
const mask2Front = document.querySelector(".mask2 .front");

const maskBack = document.querySelector(".mask1 .back");
const mask2Back = document.querySelector(".mask2 .back");


setTimeout(function() {
	maskFront.classList.add("skewAnim");
	setTimeout(function() {
		mask2Front.classList.add("skewAnim");
	}, 500);
}, 500);

mask1.addEventListener("click",flipOffer);
mask2.addEventListener("click",flipOffer2);


function flipOffer(){
	mask1.classList ? mask1.classList.add('is-flipped') : mask1.className += ' is-flipped';
}
function flipOffer2(){
	mask2.classList ? mask2.classList.add('is-flipped') : mask2.className += ' is-flipped';
}

maskBack.addEventListener("click",function(){
	window.open("https://infostation.digital","_blank")
})

mask2Back.addEventListener("click",function(){
	window.open("https://infostation.digital","_blank")
})

