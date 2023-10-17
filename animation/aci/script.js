gsap.timeline({delay:.5,repeat:-1,repeatDelay:.1})
.fromTo('.ppm_teapot',{x:0,y:0,rotate:0},{x:28,y:-60,rotate:35})
.to('.ppm_teapotshdaow',{opacity:0,duration:.1},'<')
// .to('.ppm_teapot',{x:28,y:-60,rotate:35},">")
.to('.ppm_teadriping', { "--pp_drip_clip": '100%', duration: .4,ease:'none' }, '<.5')
.to('.ppm_cupfilled', { "--pp_clip": '0%', duration: 1 }, '>-.1')
.to('.ppm_steam_container', { opacity: 1, duration: .5 }, '<.5')
.to('.ppm_teadriping', { "--pp_drip_clip": '0%', duration: .1 }, '>-.1')
.to('.ppm_teapot', { x:25,y:-50,rotate:30,opacity:0, duration: .7 }, '>-.1')
.fromTo('.ppm_products',{opacity:0,display:'none',x:-200},{opacity:1,display:'block',duration:.7,x:0},'>')
.fromTo('.ppm_ushnotaText',{opacity:0,display:'none',x:200},{opacity:1,display:'block',duration:.7,x:0},'<')
.to('.ppm_ushnotaText',{scaleX:1.1,scaleY:1.1,duration:.7,repeat:8
  ,yoyo:true},'>.2')
.to('.ppm_cupfilled', { "--pp_clip": '100%', duration: .5 }, '>-.1')
.to('.ppm_steam_container', { opacity: 0, duration: .5 }, '<')
.to('.ppm_ushnotaText',{opacity:0,display:'none',x:200,duration:.7},'<')
.to('.ppm_products',{opacity:0,display:'none',x:-200,duration:.7},'<');


