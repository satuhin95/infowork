
let canvas_hidden = document.querySelector("#canvas");


(function () {
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
})();



var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d"),
settings = {
  color: {
    r: 245,
    g: 231,
    b: 231
  }
},
loading = true;

canvas.height = document.getElementById('iis_wrapper').offsetHeight;
canvas.width = document.getElementById('iis_wrapper').clientWidth;

// var media_query = window.innerWidth;
// console.log(media_query);


var parts = [],
minSpawnTime = 10,
lastTime = new Date().getTime(),
maxLifeTime = Math.min(5000, (canvas.height / (1.5 * 60) * 1000)),
emitterX = canvas.width
emitterY = 250
// emitterX = (media_query < 576)?canvas.width-110:canvas.width-130,
// emitterY = (media_query < 576)?260:265,
smokeImage = new Image();

// console.log(emitterX);

function spawn() {
if (new Date().getTime() > lastTime + minSpawnTime) {
lastTime = new Date().getTime();
parts.push(new smoke(emitterX, emitterY));
}
}

function render() {
if(loading){
load();
return false;
}

var len = parts.length;
ctx.clearRect(0, 0, canvas.width, canvas.height);

while (len--) {
if (parts[len].y < 0 || parts[len].lifeTime > maxLifeTime) {
  parts.splice(len, 1);
} else {
  parts[len].update();
  
  ctx.save();
  var offsetX = -parts[len].size / 2,
      offsetY = -parts[len].size / 2;
  
  ctx.translate(parts[len].x - offsetX, parts[len].y - offsetY);
  ctx.rotate(parts[len].angle / 180 * Math.PI);
  ctx.globalAlpha = parts[len].alpha;
  ctx.drawImage(smokeImage, offsetX, offsetY, parts[len].size, parts[len].size);
  ctx.restore();
}
}
spawn();
requestAnimationFrame(render);
}

function smoke(x, y, index) {
this.x = x;
this.y = y;

this.size = 1;
this.startSize = 16;
this.endSize = 40;

this.angle = Math.random() * 359;

this.startLife = new Date().getTime();
this.lifeTime = 0;

this.velY = -1 - (Math.random() * 0.5);
// console.log(this.velY);
this.velX = Math.floor(Math.random() * (-3.5 +7 + 1) - 7);

}

smoke.prototype.update = function () {
this.lifeTime = new Date().getTime() - this.startLife;
this.angle += 0.2;

var lifePerc = ((this.lifeTime / maxLifeTime) * 100);

this.size = this.startSize + ((this.endSize - this.startSize) * lifePerc * .1);

this.alpha = 1 - (lifePerc * .03);
this.alpha = Math.max(this.alpha, 0);

this.x += this.velX;
this.y += this.velY;
}

smokeImage.src = document.getElementById('smoke').src;
smokeImage.onload = function(){
loading = false; 
}

function load(){
if(loading){
setTimeout(load, 100); 
}else{
render(); 
}
}

render();

// save off the original image for colorizing
var origImage = smokeImage;

window.onresize = resizeMe;
window.onload = resizeMe;

function resizeMe() {
canvas.height = document.body.offsetHeight;
}

function changeColor() {
var tCanvas = document.createElement("canvas"),
  tCtx = tCanvas.getContext("2d"),
  color = settings.color;

tCanvas.width = tCanvas.height = 16;
tCtx.drawImage(origImage, 0, 0, 16, 16);
console.log(tCanvas.width)
var imgd = tCtx.getImageData(0, 0, 16, 16),
  pix = imgd.data;

for (var i = 0, n = pix.length; i < n; i += 4) {
pix[i] = color.r 
pix[i + 1] = color.g;
pix[i + 2] = color.b;
console.log(color.g)
}

tCtx.putImageData(imgd, 0, 0);
return tCanvas.toDataURL();
}


// Settings
var gui = new dat.GUI();
var colorController = gui.addColor(settings, 'color').onChange(function () {
smokeImage.src = changeColor();
});