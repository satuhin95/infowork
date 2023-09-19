(function(){
   
    
var publisher_name = window.location.hostname.split('.').slice(-2).join('.');
switch( publisher_name ) {
    case 'banglanews24.com': topImageOverlay(".main-img img");break;
    case 'mzamin.com': topImageOverlay(".col-sm-8 .img-fluid.img.mt-2");break;
    case 'channel24bd.tv': topImageOverlay(".TopImg");break;
    case 'rtvonline.com': topImageOverlay(".detailImg");break;
    case 'ntvbd.com': topImageOverlay(".section-media picture .ratio");break;
    case 'daily-sun.com': topImageOverlay(".news-details .w-100");break;
    case 'channelionline.com': topImageOverlay(".post-thumbnail img");break;
    case 'dailynayadiganta.com': topImageOverlay(".image-holder figure img");break;
    case 'itvbd.com': topImageOverlay(".featured_image img");break;
    case 'thedailycampus.com': topImageOverlay(".featureImage img");break;
    case 'bd-pratidin.com': topImageOverlay(".details img");break;
    case 'jamuna.tv': topImageOverlay(".article-content img");break;
    default:topImageOverlay(".featureImage img");break;
}

function topImageOverlay( img_class ) {
    if(window.innerWidth>700){console.log('%cLincoln Mahmud, Info Station!!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');return false;}
    var top_image = document.querySelector(img_class);
    if(top_image){overlay(top_image);}
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

    html = "";
    html +=`
<style>
.istation__wrapper *{margin:0;padding:0;box-sizing:border-box}#istation_image_overlay_section{position:relative !important;overflow:hidden}.istation__wrapper #leftImage{top:0;left:0;width:50% !important;height:100% !important;object-fit:fill;position:absolute;margin:initial;}.istation__wrapper #rightImage{right:0;top:0;width:50% !important;height:100% !important;object-fit:fill;position:absolute;margin:initial;left:initial;}.istation__wrapper #textImage{animation-delay: 1s;width: 105px !important;height: auto;position: absolute;left: 58%;top:22%;}.istation__wrapper .istation_overlay_img{bottom:0;left:0;width:100% !important;animation-duration:2s;max-height: 50px;}.absolute{position:absolute}.hidden{display:none}.animate__animated{animation-duration:1s;animation-fill-mode:both}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@keyframes fadeInBottom{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottom{animation-name:fadeInBottom}
 /*info css*/
.istation_generic_close{position:absolute;right:1px;width:14px;height:14px;cursor:pointer;margin:0!important;z-index:100}.istation_generic_close{bottom:16%;background:url('//showcase.infostation.digital/2023/august/gp/takeover/close.svg') 0 0/100% 100% no-repeat;}
 img.logoBtn {bottom:8%;right:13%;animation-delay: 1s;width:50px !important;height:32px !important}
.hideZoomOut{animation-name: hideZoomOut;animation-duration: .5s;animation-fill-mode: both;}
@keyframes hideZoomOut {100% {opacity: 0;transform: scale3d(0.3, 0.3, 0.3);}}
.istation_overlay{width:100%;height:50px;position:absolute;bottom:0;left:0;}
picture.ratio.ratio__16x9{padding-top:0% !important;}
#istation_image_overlay_section{
    width: ` + width + `px;
    height: ` + height + `px;
}
</style>

<div class="istation__wrapper">
    <div class="istation_takeover">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/left-mobile.jpg" class="absolute animate__animated animate__fadeInLeft" id="leftImage">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/right-mobile.jpg" class="absolute animate__animated animate__fadeInRight" id="rightImage">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/prime2.png" class="absolute animate__animated animate__zoomIn" id="textImage">        
    </div>
    <div class="istation_overlay hidden">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/overlay.png" class="absolute istation_overlay_img animate__animated">
        <img style="width:50px !important;position:absolute;top:initial;left:initial;right:13%;bottom:8%;" src="//showcase.infostation.digital/2023/august/gp/takeover/prime2.png" class="logoBtn absolute animate__animated animate__zoomIn">        
    </div>
    <!-- hide and info panel -->
    <div class="istation_generic_close istation-close hidden"></div>
</div>

<script>
let leftImage = document.querySelector("#leftImage");
let rightImage = document.querySelector("#rightImage");
let textImage = document.querySelector("#textImage");
    
let istation_overlay = document.querySelector(".istation_overlay");
let istation_overlay_img = document.querySelector(".istation_overlay_img");
let closeBtn = document.querySelector(".istation_generic_close");

let bindEvent = (eventNames, selector, handler) => {
  eventNames.split(' ').forEach((eventName) => {
    document.addEventListener(eventName, function (event) {
      if (event.target.matches(selector + ', ' + selector + ' *')) {
        handler.apply(event.target.closest(selector), arguments)
      }
    }, false);
  })
};

bindEvent( 'click','.istation-close', function(e){
    console.log('Hello');
    e.preventDefault();
    var istation_classess = Array.from(document.querySelectorAll('[class^="istation_"]'));
    for(istation_class in istation_classess) {
        add_class(istation_classess[istation_class], 'hideZoomOut');
    }
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function animation() {

    await wait(4000);
    remove_class(textImage,'animate__zoomIn','animate__zoomOut');

    await wait(2000);
    
    remove_class(leftImage,'animate__fadeInLeft','animate__fadeOutLeft');
    remove_class(rightImage,'animate__fadeInRight','animate__fadeOutRight');    

    await wait(1000);
    remove_class(istation_overlay,'hidden');
    remove_class(closeBtn,'hidden');
    add_class(istation_overlay_img,'animate__fadeInBottom');     


}
animation();

bindEvent( 'click', '.istation_overlay', function(e){
    window.open("https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages/prime", "_blank");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if ( this.readyState == 4 && this.status == 200 ) {
            if (xhttp.responseText=='200') {
                console.log(xhttp.responseText); 
            }else{
                console.log(xhttp.responseText);
            }
        }
    }
    xhttp.open("POST", 'https://showcase.infostation.digital/database/gp-tackover-august-23/data.php', true);
    xhttp.send();
}); 

function getimpression() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if ( this.readyState == 4 && this.status == 200 ) {
            if (xhttp.responseText=='200') {
                console.log(xhttp.responseText)  
            } else {
                console.log(xhttp.responseText)
            }
        }
    }
    xhttp.open("POST", '//showcase.infostation.digital/database/gp-tackover-august-23/impressions.php', true);
    xhttp.send();
}
getimpression();

function remove_class(element, classname,newclass='') {
    element.className = element.className.replace(classname, newclass);
}

function add_class(element, classname) {
    element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
}  

<\/script>
`;
    new_istation_image_overlay_section.innerHTML += html;
    var scripts = new_istation_image_overlay_section.getElementsByTagName('SCRIPT');
    for (var i = 0; i < scripts.length; i++) {
        var s = document.createElement('SCRIPT');
        var a = scripts[i].attributes;
        for (var j = 0; j < a.length; j++) {
            s[a[j].nodeName] = a[j].value;
        }
        if (scripts[i].innerHTML) {
            s.text = scripts[i].innerHTML;
        }
        scripts[i].parentNode.replaceChild(s, scripts[i]);
    }
    istation_image_overlay_section.parentNode.replaceChild(new_istation_image_overlay_section, istation_image_overlay_section);
}

})('info station');
