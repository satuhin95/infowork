
  // vars
  var w = 300;
  var h = 250;

  var myDraggable = [];
  var startX, startY;
  var ctx, d;

  var o = {};
  var oNames = {
    id: 'adArea canvas dragEl planeCont slide_2 plane_icon_bg map mapControl lineEl1 lineEl2 lineEl3 lineEl4 lineEl5 lineEl6 textCont',
  }

  function init(){
    setVars();
    initAnim();

    initDrag()
    // loop();
  }

  function setVars(){
    d = {
      drag: {
        ft: false,
      },
      textTl: null,
      plane: {
        x: 594,
        y: 324,
        x0: 105,
        y0: 32,
        w: 104,
        h: 104,
        dx: 0,
        dy: 0,
        lp: {x: 0, y: 0},
      },
      map: {
        s0: 0.6,
        w: 1000,
        h: 700,
        x0: -376,
        y0: -223,
      },
      towns: {
        coords: [
          {x: 38, y: 133},
          {x: -100, y: -4},
          {x: 70, y: 92},
          {x: 48, y: 113},
          {x: -84, y: -26},
          {x: -32, y: 34},
        ], 
      }
    }
    // ctx = o.canvas.getContext('2d');
  }

  function initAnim(){
    gsap.set([o.t1, o.t2], {x: 80, opacity: 0})

    d.textTl = gsap.timeline({repeat: -1});

    d.textTl.set(o.t1, {x: 0, opacity: 1})
    d.textTl.to(o.t1, 0.35, {delay: 1, x: -40, opacity: 0, ease: Back.easeIn})
    d.textTl.set(o.t1, {x: 80})
    d.textTl.to(o.t2, 0.35, {delay: -0.1, x: 0, opacity: 1, ease: Back.easeOut})
    d.textTl.to(o.t2, 0.35, {delay: 1, x: -40, opacity: 0, ease: Back.easeIn})
    d.textTl.to(o.t1, 0.35, {delay: -0.1, x: 0, opacity: 1, ease: Back.easeOut})

    gsap.to(o.drag_icon, 0.75, {rotation: 22, x: -5, y: -5, yoyo: true, repeat: -1, ease: Power1.easeInOut, transformOrigin: "62% 66%"})

    gsap.set(o.map, {scale: d.map.s0, x: d.map.x0, y: d.map.y0, transformOrigin: "59% 46%"});


    var x = d.plane.x - d.plane.w/2;
    var y = d.plane.y - d.plane.h/2;
    // gsap.set(o.plane_icon, {x: d.plane.x, y: d.plane.y,})
    // gsap.set(o.plane_icon, {x: x, y: y,})
    gsap.set(o.plane_icon_bg, {width: d.plane.w, height: d.plane.h})
    gsap.set(o.planeCont, {x: d.plane.x0, y: d.plane.y0, width: d.plane.w, height: d.plane.h, scale: d.map.s0})
    gsap.set(o.plane_icon, {scale: 0.75})
  }


  function drawLoop(){
    // if(d.drawLoop) requestAnimFrame( drawLoop );
    // ctx.clearRect(0, 0, w, h)
    // calc();
    // draw();
  }


  function onHit(numb){
    myDraggable[0][0].disable();
    gsap.to(o.plane_icon, 0.4, {scale: 0, ease: Power1.easeIn})

    var _img = document.getElementById('id1');
    d.newImg = new Image;
    d.newImg.onload = function() {
      // console.log( this.src )
        // _img.src = this;
        showImage( this );
    }
    d.newImg.src = assets_url + (numb+1) + ".png";
  }


function showImage( img ){
  o.slide_2.appendChild( d.newImg );
  gsap.from(d.newImg, 1, {delay: 0.3, scale: 0, ease: Power3.easeOut, onComplete: function(){

  }})
  setTimeout( activateButtons, 600 );
}













/////////////////// D R A G ////////////////////////

var startX, startY;
var dragFt = false;
var ammDragged = 0;

  function initDrag( index ){ 
      myDraggable.push( addDraggable(o.planeCont) );
  }

  function addDraggable(dragObj, name){

    var drag = Draggable.create(dragObj, {//edgeResistance: 0.95, bounds: bounds, type:"x", 
        onPress:function() { 
          onPress(this);
        },
        onDrag: function(e) {
          onDrag(this, e);
        },onRelease:function(e){
          onRelease(this);
        }
      })

    drag[0].name = name;
    // drag[0].alt = alt;

    return drag;
  }


  function onPress(el){
    if(!d.drag.ft){
      d.drag.ft = true;
      // gsap.to(o.pointer, 0.4, {opacity: 0})
    }
    var name = el.name;

    zoomIn(true);

    d.textTl.pause();
    gsap.to(o.textCont, 0.3, {opacity: 0})
    gsap.to(o.drag_text, 0.3, {opacity: 0})
    gsap.set(o.drag_icon, {opacity: 0})
  }

  function onDrag(el, e){
    var name = el.name;
    var left = parseFloat( el.target.style.left );
    var top = parseFloat( el.target.style.top );

    d.plane.dx = el.x - d.plane.x0;
    d.plane.dy = el.y - d.plane.y0;

    // console.log(d.plane.dx, d.plane.dy)
    var con = 1;
    var x = d.map.x0 - d.plane.dx * con;
    var y = d.map.y0 - d.plane.dy * con;
    gsap.set(o.map, {x: x, y: y, transformOrigin: "59% 46%"})
    // mapControl

    setLines(true);

    for(var i=0; i<d.towns.coords.length; i++){
      var tp = d.towns.coords[i];
      var dx = (d.plane.dx-tp.x);
      var dy = (d.plane.dy-tp.y);
      var dist = Math.sqrt( dx*dx + dy*dy );

      if( dist < 5 ){
        // console.log( i );
        onHit(i);
      }

    }


    // var dx = d.plane.dx - d.plane.lp.x;
    // var dy = d.plane.dy - d.plane.lp.y;
    // var rad = Math.atan2(dy, dx);
    // var deg = rad * (180 / Math.PI)
    // if( deg % 90 != 0 ){
    // console.log( dx, dy );
    //   gsap.set(o.plane_icon, {rotation: deg})
    // }

    // d.plane.lp.x = d.plane.dx;
    // d.plane.lp.y = d.plane.dy;
  }

  function onRelease(el, endPos){
    var curX = startX + el.x;
    var curY = startY + el.y;

    zoomIn(false);
    setLines(false);

    d.textTl.play();
    gsap.to(o.drag_text, 0.3, {opacity: 1})
    gsap.to(o.textCont, 0.3, {opacity: 1})
    gsap.set(o.drag_icon, {opacity: 1})

    gsap.to(el.target, 0.3, {x: d.plane.x0, y: d.plane.y0, scale: d.map.s0, rotation: 0, ease: Back.easeOut})
  }


function setLines(mode){
  if(mode){
    var con = 2;
    var x = d.plane.x + d.plane.dx * con;
    var y = d.plane.y + d.plane.dy * con;

    for(var i=1; i<=6; i++){
      name = 'lineEl'+i;
      var el = o[name];
      el.setAttribute('x1', x)
      el.setAttribute('y1', y)
    }
  } else {

    var con = 2;
    var x0 = d.plane.x + d.plane.dx * con;
    var y0 = d.plane.y + d.plane.dy * con;

    var counter = {val: 0};
    gsap.to(counter, 0.35, {val: 1, ease: Back.easeOut, onUpdate: function(){
      var val = this._targets[0].val;
      var x2 = d.plane.x;
      var y2 = d.plane.y;
      var x = x0 + (x2-x0)*val;
      var y = y0 + (y2-y0)*val;

      for(var i=1; i<=6; i++){
        name = 'lineEl'+i;
        var el = o[name];
        el.setAttribute('x1', x)
        el.setAttribute('y1', y)
      }

    }})

  }
}

function zoomIn(mode){
  if(mode){
    gsap.to(o.map, 0.5, {scale: 1});
    gsap.to(o.planeCont, 0.5, {scale: 1});
    gsap.to(o.plane_icon_bg, 0.5, {opacity: 0});
  } else {
    gsap.to(o.map, 0.35, {scale: 0.6, x: d.map.x0, y: d.map.y0});
    gsap.to(o.planeCont, 0.35, {scale: 0.6});
    gsap.to(o.plane_icon_bg, 0.35, {opacity: 1});
  }
}














///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
////////////////// F U N C T I O N S //////////////////////
///////////////////////////

// SHAKE //



  function activateTap(mode){
    // if(mode){
      o.adArea.addEventListener("click", tapFunction);
    // } else {
      // o.select_btn.removeEventListener("click", tapFunction);
    // }
  }

  function removeTap(mode){
    // if(mode){
      // o.adArea.addEventListener("click", tapFunction);
    // } else {
      o.adArea.removeEventListener("click", tapFunction);
    // }
  }

  function activateButtons(){
    o.adArea.addEventListener("click", ctaFunction);
  }

  function removeButtons(){
    o.adArea.removeEventListener("click", ctaFunction);
  }

/////////////////////////////


  function getCssProperty(elmId, property){
     var elem = document.getElementById(elmId);
     return parseInt( window.getComputedStyle(elem,null).getPropertyValue(property) );
  }

  function getTransformValue(element, property){       
      var values = element.style.transform.split(")");
      for (var key in values){
          var val = values[key];              
          var prop = val.split("(");          
          if (prop[0].trim() == property)
              return prop[1];
      }                   
      return false;           
  }

  function pitagor(a, b){ return Math.pow( ( Math.pow( a , 2) + Math.pow( b , 2 ) ) , 0.5) }
  function easeInCubic(t) { return t*t*t }

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


var assetsCur = 0;
var assetsTotal = 0;
var allLoaded = false;

//

function initLoad(){
  prepareElements();
  loadAsset(assets.init);
}

function prepareElements(){
  // id
  var names = oNames.id.split(' ');
  for(var i=0; i<names.length; i++){
    var name = names[i];
    o[name] = document.getElementById(name);
  };
}


function loadOther(){
    assetsTotal =  Object.size(assets);
    // console.log("assetsTotal");
    for (var prop in assets) {
      if(prop != "init"){
        loadAsset(assets[prop]);
      }
    }
}

function loadMid(){
    loadAsset(assets.mid);
}

function loadEnd(){
    loadAsset(assets.end);
}

function loadAsset(a){
    a.cur_asset_pack = 0;
    a.asset_packs = a.length;

  for(var k=0; k<a.asset_packs; k++){
      var names = a[k].names.split(" ");
      a[k].curLoad = 0;

      // console.log( a[k] )

      if( a[k].type == "seq" ){


        for( var z=a[k].start; z<a[k].start+a[k].amm; z++){

          var id = a[k].names + z;
          // console.log("id", id)

          var img = new Image();
          img.myCustomData = {name: a[k].names, index: z, id: id};

          img.onload = function() {

            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundImage = "url(" + this.src + ")";
            div.style.opacity = 0;
            div.setAttribute("id", this.myCustomData.id)
            o.seqAll.appendChild(div);

            o[this.myCustomData.id] = div;

          }

          img.src = assets_url + a[k].folder + "/" + id + "." + a[k].format;

        }

      } else {
        for (var i=0; i<names.length; i++){
            var img = new Image();
            img.myCustomData = {total: names.length, a:a, name:names[i], numb: k};
            img.onload = function() {
              o[this.myCustomData.name] = document.getElementById(this.myCustomData.name);
              
              var type = this.myCustomData.a[this.myCustomData.numb].type;
              var elAmm = 1;
              if (type == "class"){
                o[this.myCustomData.name] = document.getElementsByClassName(this.myCustomData.name);
                elAmm = o[this.myCustomData.name].length;
              }

              for(var j=0;j<elAmm;j++){
                // console.log(this.myCustomData.name);
                var el;
                if (type == "class"){
                  el = o[this.myCustomData.name][j];
                  el.style.backgroundImage = "url(" + this.src + ")";
                } else if (type == "id") {
                  el = o[this.myCustomData.name];
                  el.style.backgroundImage = "url(" + this.src + ")";
                } else if (type == "src") {
                  // console.log( this.src );
                  el = o[this.myCustomData.name];
                  o[this.myCustomData.name].src = this.src;
                }

                el.style.position = "absolute";
                el.style.width = this.width + "px";
                el.style.height = this.height + "px";

                if(this.myCustomData.a[this.myCustomData.numb].scale != 1){
                  var scale = 1/this.myCustomData.a[this.myCustomData.numb].scale;
                  TweenMax.set(el, {scale: scale, left: -this.width/4, top: -this.height/4, transformOrigin: '50% 50%'});
                }
              }

              countAsset( this.myCustomData.a, this.myCustomData.numb, this.myCustomData.total );
            };
            img.src = assets_url + names[i] + "." + a[k].format;
        }
      }
  }
}

function countAsset(asset, o, total){
  // console.log( "countAsset", asset[o].curLoad, total );

  asset[o].curLoad++;
  if(asset[o].curLoad == (total) ) {
    // console.log("proceed", asset.cur_asset_pack, asset.asset_packs)
    asset.cur_asset_pack++;
    // console.log( asset.cur_asset_pack, asset.asset_packs )
    if(asset.cur_asset_pack == (asset.asset_packs)){
      assetSetLoaded();
    }
  }
}

function assetSetLoaded(){
    // console.log("assetSetLoaded");
    assetsCur++;
    if(assetsCur == 1){
      // adArea.style.opacity = 1;
      init();
      TweenMax.to(adArea, 0.3, {delay: 0.05, opacity: 1});
      // loadMid();
      loadOther();
    // } else if(assetsCur == 2) {
      // loadEnd();

      // initDrag();
    } else if(assetsCur == assetsTotal){
      allLoaded = true;
    }
}

//

Object.size = function(obj) { // get objects ammount in var
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


if (window.addEventListener) {
    window.addEventListener('load', initLoad(), false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initLoad());
}
