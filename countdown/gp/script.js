
       
    let slide1 = document.querySelector('.slide_one')
    let slide2 = document.querySelector('.slide_two')
    const hoursText = document.querySelector('.hoursText');
    const minutesText = document.querySelector('.minutesText');
    const secondsText = document.querySelector('.secondsText');  
    let wrapper = document.querySelector('.wrapper');

      wrapper.addEventListener('click',function(){
         window.open("{CLICK_MACRO}");
      })

checkingHour = 16;
banglaArr = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
dateCalculation();
setInterval(dateCalculation, 1000);


function dateCalculation() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    var offset = d.getTimezoneOffset();
    console.log(hours,minutes,seconds,offset);
    if (  hours >= 13 && hours <=16) {
        console.log(hours)
        slide_one();
        checkRemainingTime(hours, minutes, seconds);
    } else {
   
        slide_two();
    }
}


function checkRemainingTime(hours, minutes, seconds) {

    remainingSeconds = seconds == 0 ? 0 : 60 - seconds;
    if (remainingSeconds == 0) {
        if (minutes == 0) {
            remainingMinutes = 0;
        }
        else {
            remainingMinutes = 60 - minutes;
        }
    } else { remainingMinutes = (60 - 1) - minutes }``

    calcRemainingHours = () => {
        if (hours < checkingHour) {
            return remainingMinutes == 0 && minutes == 0 ? checkingHour - hours : (checkingHour - 1) - hours;
        } else {
            return remainingMinutes == 0 && minutes == 0 ? checkingHour + (24 - hours) : (checkingHour - 1) + (24 - hours);
        }
    }
    remainingHours = calcRemainingHours();
    secondsText.innerHTML = transformToBangla(remainingSeconds);
    minutesText.innerHTML = transformToBangla(remainingMinutes);
    hoursText.innerHTML = transformToBangla(remainingHours);

}


function transformToBangla(num) {
    if (num < 10) {
        return '০' + banglaArr[num];
    }
    else {
        firstVar = Math.floor(num / 10);
        return banglaArr[firstVar] + banglaArr[num % 10];
    }
}


function slide_two() {
    hoursText.classList.add('hidden');
    minutesText.classList.add('hidden');
    secondsText.classList.add('hidden');
    slide1.classList.add('hidden')
    slide2.classList.remove('hidden')
        
}

function slide_one() {
    hoursText.classList.remove('hidden');
    minutesText.classList.remove('hidden');
    secondsText.classList.remove('hidden');
    slide1.classList.remove('hidden')
    slide2.classList.add('hidden')


}
//  slide one 
gsap.timeline({delay:.5,repeatDelay:4,repeat:-1})
.fromTo('.element_0',2,{y:-100, x:80, opacity:0},{y:0,opacity:1,ease: Bounce.easeOut})
.fromTo('.element_3',1,{x:30,y:-30, opacity:0,display:'none'},{x:0,y:0,opacity:1,display:'block'},'>=.3')
.fromTo('.element_0',1,{x:80 },{x:0},'>=1')
.to('.element_3',1,{opacity:0,display:'none'},'<=.5')
.fromTo('.element_2',.5,{opacity:0,x:-10},{opacity:1,x:0},'>=.1')
.fromTo('.element_1',1,{y:200,opacity:0},{y:0,opacity:1})

// slide two 
    gsap.timeline({delay:.5,repeatDelay:4,repeat:-1})
    .fromTo('.element_5',2,{y:-100, opacity:0},{y:0,opacity:1,ease: Bounce.easeOut})
    .fromTo('.element_6',.5,{opacity:0,x:-10},{opacity:1,x:0},'>=.1')
    .fromTo('.element_7',1,{y:200,opacity:0},{y:0,opacity:1})
