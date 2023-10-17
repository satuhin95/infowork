var slide_1 = document.querySelector(".slide_1");
var slide_2 = document.querySelector(".slide_2");
var slide_3 = document.querySelector(".slide_3");
var pp_wrapper = document.querySelector(".PP_wrapper");
var patchBox = document.querySelector(".patch_box");
var slide1Ele2 = document.querySelector(".slide_1 .elements_2");
var slide1Ele3 = document.querySelector(".slide_1 .elements_3");

var slide2Ele1 = document.querySelector(".slide_2 .elements_1");
var slide2Ele2 = document.querySelector(".slide_2 .elements_2");
var slide2Ele3 = document.querySelector(".slide_2 .elements_3");

//sliderOne animation function
// setTimeout(sliderOne, false);
sliderOne();
function sliderOne() {
  setTimeout(function () {
    slide1Ele2.classList.add("hidden");
    slide1Ele3.classList.remove("hidden");
    slide1Ele3.classList.add("slide-left");
    setTimeout(function () {
      slide1Ele2.classList.remove("hidden");
      slide1Ele2.classList.add("slide-left");
      slide1Ele3.classList.add("hidden");

      setTimeout(sliderOne, false);
    }, 4000);
  }, 4000);
}


var displayCounter = document.querySelector(".patch_countdown");
var displayTitle = document.querySelector(".patch_title img");

var sehriSet = [
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
  "18.00",
];

var iftarSet = [
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
  "20.00",
];

setTimeout(runIftarSehriCount, false);

function runIftarSehriCount() {
  var today = new Date();
  var curDate = today.getDate();
  var curTime = today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();

  var mv = [7200, 60];
  // var mv = [3600, 60];
  var timeIftar = iftarSet[curDate]
    .split(":")
    .map((v, i) => v * mv[i])
    .reduce((a, b) => a + b, 0);
  var timeSehri = sehriSet[curDate]
    .split(":")
    .map((v, i) => v * mv[i])
    .reduce((a, b) => a + b, 0);
  var nextdaySehriTime = timeSehri + 24 * 60 * 60;

  getNextTimeType(curTime, timeSehri, timeIftar, nextdaySehriTime);

  setTimeout(runIftarSehriCount, 1000);
}

function getNextTimeType(curTime, sehriTime, iftarTime, nextdaySehriTime) {
  /*check today sehri and iftar time is before current time*/
  if (curTime <= sehriTime && curTime < iftarTime) {
    var diffTime =
      sehriTime - curTime; /*get difference seconds from today sehri time*/
    displayCounter.innerHTML = printTimer(diffTime); /*todays sehri time*/
    // console.log('sehri');
  } else if (curTime > sehriTime && curTime <= iftarTime) {
    // displayTitle.src = "./images/iftar.png";

    var diffTime = iftarTime - curTime;
    displayCounter.innerHTML = printTimer(diffTime); /*todays iftar*/


  } else if (curTime < nextdaySehriTime) {


    var diffTime = nextdaySehriTime - curTime;
    displayCounter.innerHTML = printTimer(diffTime); /*next day sehri time*/


  } else {
    console.log("something wrong, check again");
  }
}

function printTimer(sec) {
  hr = Math.floor(sec / 3600) % 24;
  mm = Math.floor(sec / 60) % 60;
  ss = sec % 60;
  mytime = hr - 16

  var x = mytime < 10 ? "0" + mytime : mytime;
  var y = mm < 10 ? "0" + mm : mm;
  var z = ss < 10 ? "0" + ss : ss;
  // mytime = hr - 16
  // console.log(mytime)
  return `
  <span class="hour  absolute">${translteNum(x)}</span> 
  <span class="minute absolute">${translteNum(
    y
  )}</span> <span class="second absolute">${translteNum(z)}</span>`;
}

function translteNum(num_str) {
  var bengali = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  var changed_nun = "";
  num_str
    .toString()
    .split("")
    .forEach((l) => {
      if (isNaN(l)) {
        changed_nun += l;
      } else {
        changed_nun += bengali[l];
      }
    });
  return changed_nun;
}
