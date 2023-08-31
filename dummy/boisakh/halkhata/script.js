var bookFront = document.querySelector('.front');
var bookBack = document.querySelector('.back');
var bookCover = document.querySelector('.cover');

bookFront.addEventListener('touchstart', openBook);
bookFront.addEventListener('click', openBook);
// bookFront.addEventListener('mouseover', openBook);

function openBook() {
    bookCover.style.transform = "rotateY(-180deg)";

    setTimeout(()=>{
        bookCover.style.transform = "rotateY(5deg)";
    },3e3);
}




iOS();
function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ 
      	bookCover.style.WebkitBackfaceVisibility = "hidden";
      	bookCover.style.WebkitTransformStyle= "preserve-3d";

      	bookFront.style.WebkitBackfaceVisibility = "hidden";
      	bookBack.style.WebkitBackfaceVisibility = "hidden";
      }
    }
  }

  return false;
}