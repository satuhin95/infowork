var displayCounter = document.querySelector(".patch_countdown");

var sehriSet = [
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
  "19:00",
];

var iftarSet = [
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
  "20:00",
];

setTimeout(runIftarSehriCount, false);

function runIftarSehriCount() {
  var today = new Date();
  var curDate = today.getDate();
  var curTime =
    today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();

  var mv = [3600, 60];
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
    // displayTitle.src = "./images/sehri.png";

    var diffTime =
      sehriTime - curTime; /*get difference seconds from today sehri time*/
    displayCounter.innerHTML = printTimer(diffTime); /*todays sehri time*/
    // console.log('sehri');
  } else if (curTime > sehriTime && curTime <= iftarTime) {
    // displayTitle.src = "./images/iftar.png";

    var diffTime = iftarTime - curTime;
    displayCounter.innerHTML = printTimer(diffTime); /*todays iftar*/
  }
}

function printTimer(sec) {
  hr = Math.floor(sec / 3600) % 24;
  mm = Math.floor(sec / 60) % 60;
  ss = sec % 60;

  var x = hr < 10 ? "0" + hr : hr;
  var y = mm < 10 ? "0" + mm : mm;
  var z = ss < 10 ? "0" + ss : ss;
  return `<span class="hour absolute">${translteNum(
    x
  )}</span> <span class="minute absolute">${translteNum(
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
