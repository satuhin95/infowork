(function(){
        var isMobile;
         if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            isMobile = true ;
         } else {
            isMobile = false ;
         }


if (isMobile) {         

    //  let url = window.location.href 
    // if( url.includes('sports') || url.includes('sport') || url.includes('cricket') || url.includes('football') ){

var publisher_name = window.location.hostname.split('.').slice(-2).join('.');
switch( publisher_name ) {
     case 'banglanews24.com': topImageOverlay(".main-img img");break;
    case 'rtvonline.com': topImageOverlay(".dtl_img_section .img img") ;break;
    case 'ntvbd.com': topImageOverlay(".section-media picture .ratio");break;
    case 'dailynayadiganta.com': topImageOverlay(".image-holder figure img");break;
    case 'protidinerbangladesh.com': topImageOverlay(".marginB20 img");break;
    case 'dailyinqilab.com': topImageOverlay(".new-details img");break;
    case 'dhakatribune.com': topImageOverlay(".jw_media_holder  img");break;    
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
.istation__wrapper *{margin:0;padding:0;box-sizing:border-box}#istation_image_overlay_section{position:relative;overflow:hidden;top:0;left:0;}
#leftImage{top:0;left:0;width:50% !important;height:100% !important;object-fit:fill;position:absolute;margin:initial;}.istation__wrapper #rightImage{right:0;top:0;width:50.2%!important;height:100% !important;object-fit:fill;position:absolute;margin:initial;left:initial;}
.istation__wrapper #textImage{top:50%;left:78%;width:74px !important;position:absolute; animation-delay:1s;animation-duration:2s;height:auto; margin:0;}
.istation__wrapper #textImage2{top:55%;left:55%;width:77px !important;position:absolute;;animation-delay:1s;animation-duration:2s;height:auto; margin:0;}
.istation__wrapper .istation_overlay .istation_overlay_img{bottom:0;left:0;width:100% !important;animation-duration:2s;max-height: 50px;position:absolute;top:initial;}
.absolute{position:absolute}.hidden{display:none}.animate__animated{animation-duration:1s;animation-fill-mode:both}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@keyframes fadeInBottom{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottom{animation-name:fadeInBottom}
 /*info css*/
.istation_generic_close{position:absolute;right:1px;width:14px;height:14px;cursor:pointer;margin:0!important;z-index:100}.istation_generic_close{bottom:16%;background:url('//showcase.infostation.digital/2023/september/ispahani/takeover/v2/close.svg') 0 0/100% 100% no-repeat;-webkit-animation:1s .4s both fadeIn24;animation:1s .4s both fadeIn24}
.panda_box {bottom: 0;right: 15%;}
.rotation_animation{
    animation: rotation_animation 2s infinite linear;
}
@keyframes rotation_animation {
  25% {transform: rotate(0deg);}
  50%{transform: rotate(10deg);}
  75%{transform: rotate(-10deg);}
  100% {transform: rotate(0deg);}
}

.istation__wrapper .istation_overlay .pack1 {
    width:41px !important;
    height:47px;
    bottom: 1%;
    right: 5%;
    animation-delay: 1s;
    position:absolute;
    top:initial;
    left:initial;
}
.istation__wrapper .istation_overlay .pack2 {
    width:45px !important;
    height:37px;
    bottom: 1%;
    right: 17%;
    animation-delay: 1s;
    position:absolute;
    top:initial;
    left:initial;
}
// ntv 
picture.ratio img {
    bottom: 0;
    left: 0;
    max-width: 100%;
    position: absolute;
    right: 0;
    width: auto;
    height: auto !important;
}


@keyframes pulse {
    from,
    to {transform: scale(1);}
    50% {transform: scale(0.9);}
}
.pulse {
    animation: 2s infinite pulse;
}
#istation_image_overlay_section{
    width: ` + width + `px;
    height: ` + height + `px;
}
</style>

<div class="istation__wrapper">
    <div class="istation_takeover">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/left-mobile.png" class="absolute animate__animated animate__fadeInLeft" id="leftImage">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/right-mobile.png" class="absolute animate__animated animate__fadeInRight" id="rightImage">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/tea-mobile.png" class="absolute animate__animated animate__zoomIn" id="textImage">  
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/t2-mobile.png" class="absolute animate__animated animate__zoomIn" id="textImage2">       
    </div>
    <div class="istation_overlay hidden">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/o-mobile.png" class="absolute istation_overlay_img animate__animated">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/t3-mobile.png" class="pack1 absolute animate__animated animate__zoomIn">
        <img src="//showcase.infostation.digital/2023/september/ispahani/takeover/v2/t4-mobile.png" class="pack2 absolute animate__animated animate__zoomIn">      
    </div>
    <!-- hide and info panel -->
    <div class="istation_generic_close istation-close hidden"></div>
</div>

<!-- modal info -->
<link rel="stylesheet" href="https://showcase.infostation.digital/overlay-demo/berger-takeover/modal.css?v=1.0">
<script src="https://showcase.infostation.digital/overlay/panda/v3/modal.js"><\/script>

<script>
    let leftImageOverlay = document.querySelector("#leftImage");
    let rightImage = document.querySelector("#rightImage");
    let textImage = document.querySelector("#textImage");
    let textImage2 = document.querySelector("#textImage2");

    let istation_overlay = document.querySelector(".istation_overlay");
    let istation_overlay_img = document.querySelector(".istation_overlay_img");
    let logoBtn = document.querySelector(".logoBtn");
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


                function animation() {
                    remove_class(textImage,'animate__zoomIn', 'animate__zoomOut');
                    remove_class(textImage2,'animate__zoomIn', 'animate__zoomOut');



                    setTimeout(function() {
                        remove_class(leftImageOverlay,'animate__fadeInLeft','animate__fadeOutLeft');
                        remove_class(rightImage,'animate__fadeInRight','animate__fadeOutRight'); 
                        setTimeout(function() {
                            remove_class(istation_overlay,'hidden');
                            add_class(istation_overlay_img,'animate__fadeInBottom');
                            remove_class(closeBtn,'hidden');

                    }, 1000);
                   }, 1500);
                                       

                    

               }

               animation();

                bindEvent( 'click', '.istation_overlay', function(e){
                window.open("https://www.facebook.com/ispahanitea", "_blank");
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
                xhttp.open("POST", 'https://showcase.infostation.digital/database/ispahani-takeover/data.php', true);
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
                xhttp.open("POST", 'https://showcase.infostation.digital/database/ispahani-takeover/impression.php', true);
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

  // }else{
  //       console.log('not Ok')
  //   }

}
})('info station');