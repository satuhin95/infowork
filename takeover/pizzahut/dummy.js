var publisher_name = window.location.hostname.split('.').slice(-2).join('.');
var top_image = document.querySelector(".featureImage img");
if(top_image){overlay(top_image);}



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
<!-- overlay image css -->
<style>
.istation__wrapper *{margin:0;padding:0;box-sizing:border-box}#istation_image_overlay_section{position:relative;overflow:hidden}.istation__wrapper #leftImage{top:0;left:0;width:50%;height:100%;object-fit:fill}.istation__wrapper #rightImage{right:0;top:0;width:50%;height:100%;object-fit:fill}.istation__wrapper #textImage{animation-delay: 1s;width: 105px;height: auto;position: absolute;left: 58%;top: 28%;}.istation__wrapper .istation_overlay_img{bottom:0;left:0;width:100%;animation-duration:2s;max-height: 50px;}.absolute{position:absolute}.hidden{display:none}.animate__animated{animation-duration:1s;animation-fill-mode:both}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.animate__fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@keyframes fadeInBottom{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottom{animation-name:fadeInBottom}
 /*info css*/
.istation_generic_close{position:absolute;right:1px;width:14px;height:14px;cursor:pointer;margin:0!important;z-index:100}.istation_generic_close{bottom:16%;background:url('//showcase.infostation.digital/2023/august/gp/takeover/close.svg') 0 0/100% 100% no-repeat;-webkit-animation:1s .4s both fadeIn24;animation:1s .4s both fadeIn24}
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
img.logoBtn {
    bottom: 3%;
    right: 13%;
    animation-delay: 1s;
    width:50px;
}
#subText {
    top: 28%;
    left: 0;
    width: 70%;
    animation-delay: 1.5s;
    animation-duration: 2s;
    right: 0;
    margin: 0 auto;
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
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/left-mobile.jpg" class="absolute animate__animated animate__fadeInLeft" id="leftImage">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/right-mobile.jpg" class="absolute animate__animated animate__fadeInRight" id="rightImage">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/prime2.png" class="absolute animate__animated animate__zoomIn" id="textImage">        
    </div>
    <div class="istation_overlay hidden">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/overlay.png" class="absolute istation_overlay_img animate__animated">
        <img src="//showcase.infostation.digital/2023/august/gp/takeover/prime2.png" class="logoBtn absolute animate__animated animate__zoomIn">        
    </div>
    <!-- hide and info panel -->
    <div class="istation_generic_close istation-close hidden"></div>
</div>

<!-- modal info -->
<link rel="stylesheet" href="https://showcase.infostation.digital/overlay-demo/berger-takeover/modal.css?v=1.0">
<script src="https://showcase.infostation.digital/overlay/panda/v3/modal.js"><\/script>

<script>
    let leftImage = document.querySelector("#leftImage");
    let rightImage = document.querySelector("#rightImage");
    let textImage = document.querySelector("#textImage");

    let istation_overlay = document.querySelector(".istation_overlay");
    let istation_overlay_img = document.querySelector(".istation_overlay_img");
    let logoBtn = document.querySelector(".logoBtn");
    let closeBtn = document.querySelector(".istation_generic_close");

    (function(){  
               const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
               async function animation() {
                    await wait(4000);
                    remove_class(textImage,'animate__zoomIn', 'animate__zoomOut');


                    await wait(2000);
                    
                    remove_class(leftImage,'animate__fadeInLeft','animate__fadeOutLeft');
                    remove_class(rightImage,'animate__fadeInRight','animate__fadeOutRight');                    

                    await wait(1000);
                    remove_class(istation_overlay,'hidden');
                    add_class(istation_overlay_img,'animate__fadeInBottom');
                    remove_class(closeBtn,'hidden');

               }
               animation();
               function remove_class(element, classname,newclass='') {
                   element.className = element.className.replace(classname, newclass);
               }
               function add_class(element, classname) {
                   element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
               }
              istation_overlay.addEventListener('click',function(){
                    window.open("https://www.grameenphone.com/personal/plans-offers/prepaid-postpaid-packages/prime", "_blank");
                     
                     let data = new FormData;
                      let submitted  = false;
                if (!submitted ) {
                    data.append( "link", window.location.hostname);
                     var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if ( this.readyState == 4 && this.status == 200 ) {
                        submitted = true;
                        if (xhttp.responseText=='200') {
                            console.log(xhttp.responseText)  
                        }else{
                            console.log(xhttp.responseText)
                            submitted = false;
                        }
                }
            }
        }
            xhttp.open("POST", 'https://showcase.infostation.digital/database/gp-tackover-august-23/data.php', true);
            xhttp.send(data);
                
           });

           window.addEventListener('load', (event) => {
             let data = new FormData;
             let submitted  = false;
                if (!submitted ) {
                    data.append( "link", window.location.hostname);
                     var xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function() {
                    if ( this.readyState == 4 && this.status == 200 ) {
                        submitted = true;
                        if (xhttp.responseText=='200') {
                            console.log(xhttp.responseText)  
                        }else{
                            console.log(xhttp.responseText)
                            submitted = false;
                        }
                }
            }
        }
            xhttp.open("POST", 'https://showcase.infostation.digital/database/gp-tackover-august-23/impressions.php', true);
            xhttp.send(data);
            });
       })();
   
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
