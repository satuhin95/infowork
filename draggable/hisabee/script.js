
let iss_element_1 = document.querySelector('.iss_element_1')
let iss_element_2 = document.querySelector('.iss_element_2')
let iss_element_3 = document.querySelector('.iss_element_3')
let iss_element_4 = document.querySelector('.iss_element_4')
let iss_element_5 = document.querySelector('.iss_element_5')
let iss_element_6 = document.querySelector('.iss_element_6')
let iss_element_7 = document.querySelector('.iss_element_7')




gsap.fromTo(".iss_element_5", {x: 0}, {x:8,duration:.5,repeat:-1,yoyo:true,ease:'none'});

hitStatus = true;

// iss_element_1
Draggable.create('.iss_element_1', {
type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
top: 0, left: 0, width: 300, height: 250,
},

onDragEnd: function () {
if (hitStatus) {

let  location = document.querySelector('.iss_element_1').getBoundingClientRect();

if(location.left > 190 && location.top > 55 ){
gsap.to(".iss_slide_1", { duration: .5, display:"none",opacity:0});
gsap.to(".iss_slide_2", { duration: .8, display:"block",opacity:1});
}else{
gsap.to(".iss_element_1", { duration: .5, x: 0, y: 0, rotate: 0 });

}

}
},
onDrag: function () {
if (this.hitTest(".boy", '30%') && hitStatus) {
hitStatus = false;

}
},

})
// iss_element_2
Draggable.create('.iss_element_2', {
type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
top: 0, left: 0, width: 300, height: 250,
},

onDragEnd: function () {
if (hitStatus) {

let  location = document.querySelector('.iss_element_2').getBoundingClientRect();

if(location.left > 190 && location.top > 55 ){
gsap.to(".iss_slide_1", { duration: .5,delay: .5 , display:"none",opacity:0});
gsap.to(".iss_slide_3", { duration: .8, delay: .5 , display:"block",opacity:1});
}else{
gsap.to(".iss_element_2", { duration: .5, x: 0, y: 0, rotate: 0 });

}

}
},
onDrag: function () {
if (this.hitTest(".boy", '30%') && hitStatus) {
hitStatus = false;

}
},

})
// iss_element_3
Draggable.create('.iss_element_3', {
type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
top: 0, left: 0, width: 300, height: 250,
},

onDragEnd: function () {
if (hitStatus) {

let  location = document.querySelector('.iss_element_3').getBoundingClientRect();

if(location.left > 190 && location.top > 55 ){
gsap.to(".iss_slide_1", { duration: .5, display:"none",opacity:0});
gsap.to(".iss_slide_4", { duration: .8, display:"block",opacity:1});
}else{
gsap.to(".iss_element_3", { duration: .5, x: 0, y: 0, rotate: 0 });

}

}
},
onDrag: function () {
if (this.hitTest(".boy", '30%') && hitStatus) {
hitStatus = false;

}
},

})
// iss_element_4
Draggable.create('.iss_element_4', {
type: "x,y", edgeResistance: .99, cursor: 'auto', bounds: {
top: 0, left: 0, width: 300, height: 250,
},

onDragEnd: function () {
if (hitStatus) {

let  location = document.querySelector('.iss_element_4').getBoundingClientRect();

if(location.left > 190 && location.top > 55 ){
gsap.to(".iss_slide_1", { duration: .5, display:"none",opacity:0});
gsap.to(".iss_slide_5", { duration: .8, display:"block",opacity:1});
}else{
gsap.to(".iss_element_4", { duration: .5, x: 0, y: 0, rotate: 0 });

}

}
},
onDrag: function () {
if (this.hitTest(".boy", '30%') && hitStatus) {
hitStatus = false;

}
},

})