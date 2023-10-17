(function() {
var publisher_name = window.location.hostname.split('.').slice(-2).join('.');
var images = document.getElementsByTagName('IMG');


var top_image = "cfphotosin-photography-HJbv998de9s-unsplash";
var replace_image = "";

for (var i = 0; i < images.length; ++i) {
var n = images[i].src.indexOf(top_image);

if (n > -1) {
    var featured_image = images[i];
    console.log('Featured Image found ' + featured_image);
    var timer = setInterval(featureimageloaded, 100);
    break;
}
}

function featureimageloaded() {
if (featured_image.complete === true) {
    clearInterval(timer);
    overlay(featured_image);
};
}

function insertAfter(referenceNode, newNode) {
referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function overlay(featured_image) {
var width = featured_image.clientWidth;
var height = featured_image.clientHeight;

var html = document.createElement('div');
html.setAttribute("id", "istation_image_overlay_section");
insertAfter(featured_image, html);

featured_image.parentNode.removeChild(featured_image);

var istation_image_overlay_section = document.getElementById("istation_image_overlay_section");
var new_istation_image_overlay_section = istation_image_overlay_section.cloneNode(false);
new_istation_image_overlay_section.appendChild(featured_image);

var newWidth = istation_image_overlay_section.offsetWidth;
var newHeight = featured_image.height;


html = "";

function isMobile() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


    html +=`
<!-- overlay image css -->
<style>
info_wrapper *{margin:0;padding:0;box-sizing:border-box; }
#istation_image_overlay_section{position:relative;overflow:hidden;}
.info_wrapper{
// width: 800px;
// height: 450px;
// top: 0;
// left: 0;
// position: relative;
// overflow: hidden;
}
.infoImgLeft{
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
}
.infoImgright{
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    display: none;
}
.infoLeftPizza {
    width: 56%;
    height: auto;
    left: -23%;
    top: 4%;
    position: absolute;
    z-index: 3;
}
.infoRightPizza {
    width: 56%;
    height: auto;
    right: -23%;
    top: 4%;
    position: absolute;
    z-index: 3;
}

.infoMiddleBg {
    width: 56%;
    height: 100%;
    right: 23%;
    left: 23%;
    top: 0%;
    bottom: 0%;
    position: absolute;
    z-index: 2;
    display: none;
}
.infoPizzaLogo {
    width: 34%;
    height: auto;
    left: 34%;
    top: 6%;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.infoText {
    width: 32%;
    height: auto;
    left: 34%;
    top: 22%;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.infoText1 {
    width: 24%;
    height: auto;
    left: 38%;
    top: 52%;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.infoText2 {
    width: 24%;
    height: auto;
    left: 38%;
    top: 65%;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.infoText3 {
    width: 24%;
    height: auto;
    left: 38%;
    top: 78%;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.info_overlay{
    width: 100%;
    height: 18% !important;
    /* max-height: 120px; */
    bottom: 0%;
    left: 0%;
    position: absolute;

}
.infoOverlayBg{
    width: 100%;
    max-height: 120px;
    bottom: 0;
    left: 0;
    position: absolute;
    display: none;
    
}
.infoPack1 {
    position: absolute;
    width: 17%;
    height: auto;
    left: 25%;
    bottom: 75%;
    display: none;
}
.infoPack2 {
    position: absolute;
    width: 17%;
    height: auto;
    left: 44%;
    bottom: 75%;
    display: none;
}
.infoPack3 {
    position: absolute;
    width: 17%;
    height: auto;
    left: 34%;
    bottom: 22%;
    display: none;
}
.info_close_btn{
    position: absolute;
    right: 1px;
    width: 20px;
    height: 20px;
    bottom: 20%;
    cursor: pointer;
    margin: 0!important;
    z-index: 100;
    background:url(//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/close.svg) no-repeat;
    opacity: 0;
}



#istation_image_overlay_section{
width: ` + width + `px;
height: ` + height + `px;
}
</style>

<div class="info_wrapper">
    <div class="info_takeover">
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/left.png" class="infoImgLeft" />
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/right.png" class="infoImgright" />
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/leftpizza.png" class="infoLeftPizza" />
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/rightpizza.png" class="infoRightPizza" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/bg2.png" class="infoMiddleBg" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/logo.png" class="infoPizzaLogo" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/plus.png" class="infoText" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/01.png" class="infoText1" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/02.png" class="infoText2" />
            <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/03.png" class="infoText3" />
    </div>
    <div class="info_overlay">
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/overlay2.png" class="infoOverlayBg">
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/1.png" class="infoPack1">
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/2.png" class="infoPack2">
        <img src="//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/3.png" class="infoPack3">
     </div>
    <div class="info_close_btn"></div>
</div>




<script>



let infoImgLeft = document.querySelector('.infoImgLeft')
let infoImgright = document.querySelector('.infoImgright')
let infoLeftPizza = document.querySelector('.infoLeftPizza')
let infoRightPizza = document.querySelector('.infoRightPizza')
let infoMiddleBg = document.querySelector('.infoMiddleBg')
let infoPizzaLogo = document.querySelector('.infoPizzaLogo')
let infoText = document.querySelector('.infoText')
let infoText1 = document.querySelector('.infoText1')
let infoText2 = document.querySelector('.infoText2')
let infoText3 = document.querySelector('.infoText3')
let info_overlay = document.querySelector('.info_overlay')
let infoOverlayBg = document.querySelector('.infoOverlayBg')
let infoPack1 = document.querySelector('.infoPack1')
let infoPack2 = document.querySelector('.infoPack2')
let infoPack3 = document.querySelector('.infoPack3')
let info_close_btn = document.querySelector('.info_close_btn')

takeoverAnimi()
    function takeoverAnimi(){
      TweenMax.fromTo(infoLeftPizza, 1, {display: 'none', scale:.5}, {display: 'block',scale:1,ease: Bounce.easeOut});
      TweenMax.fromTo(infoRightPizza, 1, {display: 'none', scale:.5}, {display: 'block',scale:1,ease: Bounce.easeOut});
      TweenMax.fromTo(infoLeftPizza, 5, {rotation:"0"}, {rotation:"90", ease:Linear.easeNone},'>=.1');
      TweenMax.fromTo(infoRightPizza, 5, {rotation:"0"}, {rotation:"90", ease:Linear.easeNone},'<=.01')
        setTimeout(function(){
          TweenMax.fromTo(infoMiddleBg, 1, {display: 'none',y: '100vh'}, {display: 'block',y:'0vh'});
          TweenMax.fromTo(infoImgLeft, 1, {display: 'none', y: '-100vh'}, {display: 'block', y:'0vh'},'<=.1');
          TweenMax.fromTo(infoImgright, 1, {display: 'none', y: '100vh'}, {display: 'block', y:'0vh'},'<=.1');
            TweenMax.fromTo(infoPizzaLogo, 1, {opacity:'0' ,scale:.5}, {opacity:'1',scale:1},'>=.1');
            TweenMax.fromTo(infoText, 1, {opacity:'0' ,scale:.5}, {opacity:'1',scale:1,ease: Bounce.easeOut},'<=.1');
            TweenMax.fromTo(infoText1, 1, {opacity:'0' ,scale:.5}, {opacity:'1',scale:1},'<=.1');
            TweenMax.fromTo(infoText2, 1, {opacity:'0' ,scale:.5}, {opacity:'1',scale:1},'<=.1');
            TweenMax.fromTo(infoText3, 1, {opacity:'0' ,scale:.5}, {opacity:'1',scale:1},'<=.1');
                setTimeout(function(){
                  TweenMax.fromTo(infoText3, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5});
                  TweenMax.fromTo(infoText2, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5},'<=.1');
                  TweenMax.fromTo(infoText1, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5},'<=.1');
                  TweenMax.fromTo(infoText, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5},'<=.1');
                  TweenMax.fromTo(infoPizzaLogo, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5},'<=.1');
                  TweenMax.fromTo(infoMiddleBg, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5},'<=.1');

                  TweenMax.fromTo(infoLeftPizza, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5,},'<=.1');
                  TweenMax.fromTo(infoRightPizza, 1, {display: 'block',opacity:'1',scale:1},{display: 'none',opacity:'0' ,scale:.5,},'<=.1');

                  TweenMax.fromTo(infoImgLeft, 2, {display: 'block', y:'0vh'},{display: 'none', y: '-100vh'},'<=.5');
                  TweenMax.fromTo(infoImgright, 2, {display: 'block', y:'0vh'},{display: 'none', y: '100vh'},'<=.01');  
                  
                  TweenMax.fromTo(infoOverlayBg, 2, {display: 'none', y: '50vh',opacity:'0'}, {display: 'block', y:'0vh',opacity:'1'},'<=.1');
                  TweenMax.fromTo(infoPack1, 1, {display: 'none',opacity:'0' ,scale:.5}, {display: 'block',opacity:'1',scale:1,ease: Bounce.easeOut},'>=.1');
                  TweenMax.fromTo(infoPack2, 1, {display: 'none',opacity:'0' ,scale:.5}, {display: 'block',opacity:'1',scale:1,ease: Bounce.easeOut},'<=.1');
                  TweenMax.fromTo(infoPack3, 1, {display: 'none',opacity:'0' ,scale:.5}, {display: 'block',opacity:'1',scale:1,ease: Bounce.easeOut},'<=.1');
                  TweenMax.fromTo(info_close_btn, 1, {display: 'none',opacity:'0' ,scale:.5}, {display: 'block',opacity:'1',scale:1},'<=.1');
            },3000)

        },3000);
          
    }



    info_close_btn.addEventListener('click', function (e) {
    e.stopPropagation()
    gsap.to(info_overlay, { y: '70px', x: '70px', scale: .1, opacity: 0, display: 'none', duration: 1 });
    gsap.to(info_close_btn, {  scale: .1, opacity: 0, display: 'none', duration: 1 });
  })







          
             
<\/script>
`;

new_istation_image_overlay_section.innerHTML += html;

var scripts = new_istation_image_overlay_section.getElementsByTagName('SCRIPT');
for (var i = 0; i < scripts.length; i++) {
    var s = document.createElement('SCRIPT');
    var a = scripts[i].attributes;
    for (var j = 0; j < a.length; j++) {
        if (a[j].value != '//test.purplebd.com/image/async.js') {
            s[a[j].nodeName] = a[j].value;
        } else {
            console.log('exception lincoln');
        }
    }
    if (scripts[i].innerHTML) {
        s.text = scripts[i].innerHTML;
    }
    scripts[i].parentNode.replaceChild(s, scripts[i]);
}
istation_image_overlay_section.parentNode.replaceChild(new_istation_image_overlay_section, istation_image_overlay_section);
}

})();