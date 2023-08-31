/**
 * Lead banner for Hero
 * @author Lincoln Mahmud
 * @company Info Station
 * date: 28 October, 2021
*/
let bindEvent = (eventNames, selector, handler) => {
  eventNames.split(' ').forEach((eventName) => {
    document.addEventListener(eventName, function (event) {
      if (event.target.matches(selector + ', ' + selector + ' *')) {
        handler.apply(event.target.closest(selector), arguments)
      }
    }, false);
  })
};

let imageUrl = [
    'milage_details.png?v=1.2',
    'braking_details.png?v=1.2',
    'control_details.png?v=1.2',
    'performance_details.png?v=1.2'
];

var asset_link = 'https://showcase.infostation.digital/ideas/mosla/images/';
var btn1 = document.querySelector('.btn1');
var slide_1 = document.querySelector('.slide_1');
var slide_2 = document.querySelector('.slide_2');
var slide_3 = document.querySelector('.slide_3');
var details = document.querySelector('.details img');
var user_name = document.querySelector('.user_name');
var user_tel = document.querySelector('.user_tel');
var user_loc = document.querySelector('.user_loc');

bindEvent('click', '.btn1', function(e){
    slide_1.style.left='300px';
    slide_2.style.left='0';
    details.src = asset_link + imageUrl[0];
    setTimeout( leadPage, false);
    // bikerUserLike(1);
});

bindEvent('click', '.btn4', function(e){
    slide_1.style.left='300px';
    slide_2.style.left='0';
    details.src = asset_link + imageUrl[3];
    setTimeout( leadPage, false);
    // bikerUserLike(4);
});

bindEvent('click', '.btn3', function(e){
    slide_1.style.left='300px';
    slide_2.style.left='0';
    details.src = asset_link + imageUrl[2];
    setTimeout( leadPage, false);
    // bikerUserLike(3);
});

bindEvent('click', '.btn2', function(e){
    slide_1.style.left='300px';
    slide_2.style.left='0';
    details.src = asset_link + imageUrl[1];
    setTimeout( leadPage, false);
    // bikerUserLike(2);
});

function leadPage() {        
    setTimeout(function () {
        slide_2.style.display='none';
        slide_3.style.display='block';
    }, 4000);
}



function add_class(element, classname) {
    element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
}
/*add and remove class function*/
function remove_class(element, classname) {
    element.className = element.className.replace(classname, '');
}