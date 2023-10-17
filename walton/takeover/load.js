(function() {

var publisher_name = window.location.hostname.split('.').slice(-2).join('.');
switch( publisher_name ) {
    case 'banglanews24.com': topImageOverlay(".main-img img");break; //ok
    case 'rtvonline.com': topImageOverlay(".dtl_img_section .img img") ;break; // ok 
    case 'dailynayadiganta.com': topImageOverlay(".image-holder figure img");break; //ok
    case 'protidinerbangladesh.com': topImageOverlay(".marginB20 img");break; //ok
    case 'dailyinqilab.com': topImageOverlay(".new-details img");break; //ok
    case 'dhakatribune.com': topImageOverlay(".jw_media_holder  img");break; //ok
    case 'thedailycampus.com': topImageOverlay(".featureImage img");break; //ok
    case 'bd-pratidin.com': topImageOverlay(".details img");break;  //mobile ok
    case 'mzamin.com': topImageOverlay(".col-sm-8 .img-fluid.img.mt-2");break;  //ok
    case 'itvbd.com': topImageOverlay(".featured_image img");break; //ok
    case 'jamuna.tv': topImageOverlay(".article-content img");break; //ok 
    case 'daily-sun.com': topImageOverlay(".news-details .w-100");break; //mobile ok 
    case 'channelionline.com': topImageOverlay(".post-thumbnail img");break;    //ok
    default:topImageOverlay(".featureImage img");break;
}



function topImageOverlay( img_class ) {
    var top_image = document.querySelector(img_class);

    if(top_image){
        if (top_image.complete) {
          overlay(top_image);
        } else {
          top_image.addEventListener('load', function() {overlay(top_image);})
          top_image.addEventListener('error', function() {
              console.log('image error')
          })
        }  
    }

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
.info_wrapper .info_takeover .infoImgLeft{
    width: 50% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    display: none;
}
.info_wrapper .info_takeover .infoImgright{
    width: 50% !important;
    height: 100% !important;
    position: absolute !important;
    top: 0 !important;
    right: 0 !important;
    display: none;
}
 .info_wrapper .info_takeover .infoLeftPizza {
    width: 56% !important;
    height: auto !important;
    left: -23% !important;
    top: 4% !important;
    position: absolute !important;
    z-index: 3;
}
.info_wrapper .info_takeover .infoRightPizza {
    width: 56% !important;
    height: auto !important;
    right: -23% !important;
    top: 4% !important;
    position: absolute !important;
    z-index: 3;
}

.info_wrapper .info_takeover .infoMiddleBg {
    width: 56% !important;
    height: 100% !important;
    right: 23% !important;
    left: 23% !important;
    top: 0% !important;
    bottom: 0% !important;
    position: absolute !important;
    z-index: 2;
    display: none;
}
.info_wrapper .info_takeover .infoPizzaLogo {
    width: 34% !important;
    height: auto !important;
    left: 34% !important;
    top: 6% !important;
    position: absolute !important;
    z-index: 2;
    opacity: 0;
}
.info_wrapper .info_takeover .infoText {
    width: 32% !important;
    height: auto !important;
    left: 34% !important;
    top: 22% !important;
    position: absolute;
    z-index: 2;
    opacity: 0;
}
.info_wrapper .info_takeover .infoText1 {
    width: 24% !important;
    height: auto !important;
    left: 38% !important;
    top: 52% !important;
    position: absolute !important;
    z-index: 2;
    opacity: 0;
}
.info_wrapper .info_takeover .infoText2 {
    width: 24% !important;
    height: auto !important;
    left: 38% !important;
    top: 65% !important;
    position: absolute !important;
    z-index: 2;
    opacity: 0;
}
.info_wrapper .info_takeover .infoText3 {
    width: 24% !important;
    height: auto !important;
    left: 38% !important;
    top: 78% !important;
    position: absolute !important;
    z-index: 2;
    opacity: 0;
}
.info_overlay{
    width: 100% !important;
    height: 18% !important;
    /* max-height: 120px; */
    bottom: 0% !important;
    left: 0% !important;
    position: absolute;

}
.info_wrapper .info_overlay .infoOverlayBg{
    width: 100% !important;
    max-height: 120px !important;
    bottom: 0 !important;
    left: 0 !important;
    position: absolute !important;
    display: none;
    
}
.info_wrapper .info_overlay .infoPack1 {
    position: absolute !important;
    width: 17% !important;
    height: auto !important;
    left: 25% !important;
    bottom: 75% !important;
    display: none;
}
.info_wrapper .info_overlay .infoPack2 {
    position: absolute !important;
    width: 17% !important;
    height: auto !important;
    left: 44% !important;
    bottom: 75% !important;
    display: none;
}
 .info_wrapper .info_overlay .infoPack3 {
    position: absolute !important;
    width: 17% !important;
    height: auto !important;
    left: 34% !important;
    bottom: 22% !important;
    display: none;
}
.info_close_btn{
    position: absolute !important;
    right: 1px !important;
    width: 20px !important;
    height: 20px !important;
    bottom: 20% !important;
    cursor: pointer;
    margin: 0!important;
    z-index: 100;
    background:url(//showcase.infostation.digital/2023/september/pizzahut/takeover/v4/close.svg) no-repeat;
    opacity: 0;
}
// rtv 
.dtl_section img {
     width: 0px !important; 
}
// banglanews24
.details .main-img img {
     margin:0 !important; 
}
// dhakatribune
.jw_media_holder.alignfull img {
     width: 0%!important; 

}
// itvbd
.jw_media_holder.alignfull img {
     width: 100%!important; 
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

// Create a <script> element
var script = document.createElement('script');

// Set the source attribute to the GSAP CDN URL
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js';

// Define a callback function to execute when the script is loaded
script.onload = function () {
 


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


};

// Append the <script> element to the document's <head>
// document.getElementById("istation_image_overlay_section").appendChild(script)
document.body.appendChild(script);

         
             
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