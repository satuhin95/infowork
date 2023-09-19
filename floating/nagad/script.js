var w = window.innerWidth;
gsap.set('.ppm_sakib',{y:60})
if (w < 1366) {
  gsap.set('.baseDiv', { scaleX: .8, x: 24, scaleY: .8, y: 20 })
}
gsap.set(['.ppm_car1', '.ppm_car2', '.ppm_car3', '.ppm_car4'], { x: '-120vw' })

// gsap.set('.baseDiv',{scaleX:.5,scaleY:.5,x:125,y:125})
// gsap.set('.baseDiv',{scaleX:.8,x:30,scaleY:.8,y:25})

gsap.timeline({
  onComplete: () => {
    gsap.to('.ppm_sakib',{y:0,opacity:1,display:'block'})
    gsap.to('.ppm_logo',{y:0,opacity:1,display:'block',duration:.6})
    gsap.to('.ppm_text1', { opacity: 1, display: 'block', duration: .5,delay:.2 })

    gsap.timeline({delay:.2})
      .to('.ppm_cta',{display:'block',opacity:1})
      .to('.ppm_cta',{scaleX:1.1,scaleY:1.1,yoyo:true,repeat:-1})
  }
})
  .to('.ppm_car4', { x: '0', display: 'block', opacity: 1, duration: .8 })
  .to('.ppm_car3', { x: '0', display: 'block', opacity: 1, duration: .8 }, '<.5')
  .to('.ppm_car2', { x: '0', display: 'block', opacity: 1, duration: .8 }, '<.5')
  .to('.ppm_car1', { x: '0', display: 'block', opacity: 1, duration: .8 }, '<.5')






document.querySelector('.ppm_closeBtn').addEventListener('click', function (e) {
  e.stopPropagation()
  gsap.to('.baseDiv', { y: '70px', x: '70px', scale: .1, opacity: 0, display: 'none', duration: 1 });
})

document.querySelector('.baseDiv').addEventListener('click', () => {
  window.open("https://www.nagad.com.bd")
})