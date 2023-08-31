    var brushSize = 70;
    var w = 600;
    var h = 500;

    var innerSize = 0.94;

    var gridArray = [];
    var gridHits = {
        cur: 0,
        total: 0,
        needed: 0.6
    }

    var image = new Image();
    var canvas = document.getElementById("ctx");
    var ctx = canvas.getContext("2d");
    var mouseStatus = 'none';
    var mouseStatus2 = 'none';
    var mousePos = {x:0, y:0};
    var cursorAnimInt;

    function init(){
        animate();
        var scale = 2;

        ctx.drawImage(image, -((1-1)*w/2), -(1-1)*h/2, w*1, h*1);
        ctx.globalCompositeOperation='destination-out';

        setGrid();
        showOver();
        var revealCont = document.getElementById("bg1");
        revealCont.style.backgroundImage = "url('"+rSrc+"')";
        revealCont.style.backgroundSize = "100% 100%";
    }

    function setGrid(){
        var w = canvas.offsetWidth;
        var h = canvas.offsetHeight;
        var b = brushSize;

        var c = Math.round( w / b );
        var r = Math.round( h / b );
        //console.log(c, r);

        var wS = (w-(c-1)*b)/2 + 0;
        var hS = (h-(r-1)*b)/2 + 0;

        for(var i=0; i<c; i++){
            gridArray.push([]);
            for(var j=0; j<r; j++){
                var pos = {
                    x: wS + b*i,
                    y: hS + b*j,
                    hit: false
                }
                gridArray[i].push(pos);
            }
        }

        gridHits.total = c*r;
    }

    function showOver(){        
        addEvents();
    }

    var inverseLoop = false;


    function animate(time) {
        requestAnimFrame(animate);
        TWEEN.update(time);
    }

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                  window.setTimeout(callback, 1000 / 60);
              };
    })();

    function otherVal(val){
        if(val){
            return false;
        } else {
            return true;
        }
    }

    function endErase(){
        changeOpacity(canvas, 0 , 500, 0)
        var steps = Math.floor(canvas.offsetHeight / brushSize)*2 + 5;
        //console.log(steps)
        var curStep = 1;
        var side = "right";

        ctx.beginPath();
        ctx.lineWidth = brushSize*2;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 0);

        hideOverEl();

        var eraseInt = setInterval(
            function(){
                var x, y;
                switch(side){
                    case "left":
                        y = 0;
                        x = brushSize*curStep;
                        side = "right";
                        break;
                    case "right":
                        //x = canvas.offsetWidth;
                        x = 0;
                        y = brushSize*curStep;
                        side = "left";
                        break;
                }

                ctx.lineTo(x, y);
                ctx.stroke();

                if(curStep == steps){
                    clearInterval(eraseInt);
                }
                curStep++;
            }, 30
        );
    }

    function clickPos(x, y){
        ctx.fillRect(x-2,y-2,5,5);
    }

    /* 
        E V E N T S
    */

    var ctxArea = document.getElementById("ctx");

    function addEvents(){
        ctxArea.addEventListener("mousedown", mouseDown);
        ctxArea.addEventListener("mouseup", mouseUp);
        ctxArea.addEventListener('mousemove', mouseMove);

        ctxArea.addEventListener('touchstart', touchDown);
        ctxArea.addEventListener("touchend", touchUp);
        ctxArea.addEventListener("touchmove", touchMove);
    }

    var lastPoint = {x:-1, y:-1};
    var firstPoint = true;

    function showLine(x, y){
        if(lastPoint.x != -1){
            ctx.beginPath();
            ctx.lineWidth = brushSize*2;
            ctx.moveTo(lastPoint.x, lastPoint.y);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
    }

    function showPoint(x, y){
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.arc(x, y, brushSize, 0, 2*Math.PI);
        ctx.fill();

        for(var i=0;i<gridArray.length; i++){
            for(var j=0;j<gridArray[i].length; j++){
                var x = gridArray[i][j].x;
                var y = gridArray[i][j].y;
                if((!gridArray[i][j].hit) && (ctx.isPointInPath(x, y))) {
                    gridArray[i][j].hit = true;
                    gridHits.cur++;
                    if((gridHits.cur > gridHits.total*gridHits.needed) && (!revealed)){
                        revealBehind();
                        revealed = true;
                    }
                }        
            }
        }
    }

    var ft = false;

    function hideOver(){
        
        if(!ft){
            document.getElementById("scratch").style.display="none";
            setTimeout(endScratchIfInactive, 5e3);

            // hideOverEl();


            ft = true;
        }
    }

    function endScratchIfInactive(){
        if(!revealed){
            revealBehind();
            revealed = true;
        }            
    }

    function hideOverEl(){
        track.pause();
        console.log("hideOverEl");
        document.querySelector('.lead_box').style.display = 'block';
        var val2 = { val: 1 };
        var val1 = 0;
        var el = document.getElementById("over");
        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, 1000)
        .onUpdate(function(){
            el.style.opacity = this.val;
        })
        .start()
        .onComplete(function() {
        })


        var val2b = { val: 1 };
        var val1b = 0;
        var elb = document.getElementById("endAnimCont");
        var tween = new TWEEN.Tween(val2)
        .to({val: val1b }, 1100)
        .onUpdate(function(){
            var s = 0.85 + 0.15 * (1-this.val);
            moveVerScaleEl(elb, 0, s);
        })
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
        .onComplete(function() {
        })

    }

    function changeOpacity(el, val, dur, delay){
        var val1, val2;
        if (val == 0){
            val2 = { val: 1 };
            val1 = 0;
        } else { 
            val2 = { val: 0 };
            val1 = 1;
        }

        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, dur)
        .delay(delay)
        .start()
        .onComplete(function() {
        })
    }


    function moveEl(el, side, dist, dur, delay, ease){
        var moveDist;
        switch(side){
            case "right":
                moveDist = dist;
                break;
            case "left":
                moveDist = -dist;
                break;
        }

        moveHor(el, dist);

        var val2 = { val: 1 };
        var val1 = 0;
        var tween = new TWEEN.Tween(val2)
        .to({val: val1 }, dur)
        .easing(ease)
        .onUpdate(function(){
            var val = this.val * moveDist;
            moveHor(el, val);
            el.style.opacity = 1-this.val;
        })
        .delay(delay)
        .start()
        .onComplete(function() {
        })
    }

    function moveHor(el, val){
        el.style.msTransform = "translate("+val+"px, 0px)";
        el.style.webkitTransform = "translate("+val+"px, 0px)";
        el.style.transform = "translate("+val+"px, 0px)";
    }

    function moveVer(el, val){
        el.style.msTransform = "translate(0px, "+val+"px)";
        el.style.webkitTransform = "translate(0px, "+val+"px)";
        el.style.transform = "translate(0px, "+val+"px)";
    }

    var ftEvent = false;
    function mouseDown(e){
        if(!ftEvent){
            ftEvent = true;
        }
        scratching = true;
        mouseStatus = 'down';
        firstPoint = false;

        hideOver();

        x = e.offsetX;
        y = e.offsetY;
        showPoint(x, y);
    }
    function mouseUp(e){
        scratching = false;
        firstPoint = true;
        mouseStatus = 'none';
        lastPoint.x = -1;
    }
    function mouseMove(e){
        x = e.offsetX;
        y = e.offsetY;
        mousePos.x = x;
        mousePos.y = y;

        if (mouseStatus == 'down'){
            showPoint(x, y);
            showLine(x, y);
            lastPoint.x = x;
            lastPoint.y = y;
        }
    }

    var ftTouch = false;

    function touchDown(e){
        if(!ftEvent){
            ftEvent = true;
        }
        ftTouch = true;
        scratching = true;
        mouseStatus = 'down';
        document.documentElement.style.overflow = 'hidden';
        e.preventDefault();
        firstPoint = false;

        hideOver();


        x = e.offsetX * 2;
        y = e.offsetY * 2;
        showPoint(x, y);
    }

    function touchUp(e){
        scratching = false;
        mouseStatus = 'none';
        document.documentElement.style.overflow = 'auto';
        e.preventDefault();
        lastPoint.x = -1;
    }

    function touchMove(e){
        mouseStatus2 = 'move';

        element = document.getElementById("ctx");
        var rect = element.getBoundingClientRect();

        var touch = e.touches[0];
        var x = touch.clientX - rect.left;
        var y = touch.clientY - rect.top;

        x = x  * 2;
        y = y  * 2;

        mousePos.x = x;
        mousePos.y = y;

        if (mouseStatus == 'down'){
            showPoint(x, y);
            showLine(x, y);
            lastPoint.x = x;
            lastPoint.y = y;
        }

        e.preventDefault();
    }

    var scratching = false;
    var scrCur = 0;
    var scrNeed = 1500;
    var revealed = false;

    function activateControls(){
    }

    function outBack(n, s){
      //var s = 1.70158;
      return --n * n * ((s + 1) * n + s) + 1;
    };

    function moveVerScaleEl(el, y, scale){
        el.style.msTransform = "scale("+scale+") translate(0px, "+y+"px)";
        el.style.webkitTransform = "scale("+scale+") translate(0px, "+y+"px)";
        el.style.transform = "scale("+scale+") translate(0px, "+y+"px)";
    }

    function revealBehind(){
        ctxArea.removeEventListener("mousedown", mouseDown);
        ctxArea.removeEventListener("mouseup", mouseUp);
        ctxArea.removeEventListener('mousemove', mouseMove);
        ctxArea.removeEventListener('touchstart', touchDown);
        ctxArea.removeEventListener("touchend", touchUp);
        ctxArea.removeEventListener("touchmove", touchMove);

 
        setTimeout(endErase, 50);
        var val = 1;
        var valDec = 0.02; // didesnis sk greiciau baigiasi perejimas


        var val2 = { val: 0 };
        var tween = new TWEEN.Tween(val2)
        .to({val: 1 }, 900)
        .easing(TWEEN.Easing.Quadratic.Out)
        .delay(500)
        .start()
        .onComplete(function() {
        })
    }
 
    image.onload = function() {
        countLoad();
    };
    image.src = 'images/bg2.jpg';

 var remote = document.querySelector(".remote_area");

var track = document.querySelector('#relaxAudio');
function remoteClick(){
    track.loop = true;
    track.play();
    document.querySelector(".remote_hand").classList='remote_hand fadeOut';
    document.querySelector(".ac_dense").classList ='ac_dense fadeIn';
    remote.classList='remote_area fadeOut';    
    setTimeout(function() {
        document.querySelector("#adArea").style.visibility="visible";
        document.querySelector("#adArea").classList="rct fadeIn";
        setTimeout(function() {
            document.querySelector("#scratch").style.opacity="1";
        }, 1000);
    }, 1000);
}

remote.addEventListener("click", remoteClick);
remote.addEventListener("mousedown", remoteClick);
remote.addEventListener('touchstart', remoteClick);
remote.addEventListener("touchend", remoteClick);
remote.addEventListener("touchmove", remoteClick);




