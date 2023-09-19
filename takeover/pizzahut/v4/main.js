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



