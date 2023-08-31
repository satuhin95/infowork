
var def = {
	c: 8,
	r: 1,
	w: 300,
	h: 250,
	cube: {
		amm: 0,
		w: 0,
		h: 0,
		z: 8,
		list: [],
	}
};

var o = {};
var oNames = {
	id: 'pp_wrapper mainCont'
};

function init(){
	prepareData();
	createCubes();
	setTimeout(rotateCubes,1e3);
	activateButtons();
}

function prepareData(){
	def.cube.w 		= Math.round( def.w / def.c );
	def.cube.h 		= Math.round( def.h / def.r );
	def.cube.amm 	= def.r * def.c;
	// console.log(def.cube)
}

function createCubes(){
	for(var r=0; r<def.r; r++){
		for(var c=0; c<def.c; c++){
		createCube(r, c);
		}
	}
}

function createCube( r,c ) {
	var add = {x: 1, y: 1};

	if(r==def['r']-1){
		add['y']+=-1;
	}
	if(c==def['c']-1){
		add['x']+=-1;
	}

		var w=def.cube.w;
		var h=def.cube.h;
		var z=def.cube.z;
		var sideCol ='rgb(227,227,227)';
		var sideGrad ='radial-gradient(rgba(227,227,227,1) 0%, rgba(1,1,1,1) 300%)';
		var s=0.99;

		var cube = document.createElement("div");
		cube.classList.add("cube");
		setCubeSize(cube, {x: 0, y: 0});

		cube.style.left = c * w + "px";
		cube.style.top = r * h + "px";

		// cube.style.left =c*w;
		// cube.style.top =r*h;

		// frontFace
		var frontFace=document.createElement("div");
		frontFace.classList.add("face");
		frontFace.classList.add("bg1");
		setCubeSize(frontFace,add);
		var picUrl=assets_url+'1.jpg';
		frontFace.style.backgroundImage='url('+picUrl+' )';
		frontFace.style.backgroundPosition =-c*w+'px '+-r*h+'px';
		frontFace.style.backgroundRepeat='no-repeat';
		cube.appendChild(frontFace);

		// leftFace
		var leftFace=document.createElement("div");
		leftFace.classList.add("face");
		setSideSize(leftFace,add);
		TweenMax.set(leftFace,{'rotationY':90,'transformOrigin':'0% 0%','scaleX':s,'z':-def.cube.z*(1-s)});
		setBgImage(leftFace,sideCol,sideGrad );
		cube.appendChild(leftFace);

		// rightFace
		var rightFace=document.createElement("div");
		rightFace.classList.add("face");
		setSideSize(rightFace,add);
		TweenMax.set(rightFace,{'rotationY':90,'x':w+1,'transformOrigin':'0% 0%','scaleX':s,'z':-def.cube.z*(1-s)/0x2});
		setBgImage(rightFace,sideCol,sideGrad );
		cube.appendChild(rightFace);

		// center point
		var cp=document.createElement("div");
		cp.classList.add("face");
		setCubeSize(cp,add);
		TweenMax.set(cp,{'scaleX':-1,'rotationY':0,'z':-z-1});
		var pic2=assets_url+'1.jpg';
		cp.style.backgroundImage='url('+pic2+' )';
		cp.style.backgroundPosition = -c*w+'px '+ + -r*h +'px';
		cp.style.backgroundRepeat ='no-repeat';
		cube.appendChild(cp);

		// console.log(-c*w+'px ' + -r*h +'px');

		// backFace
		var backFace=document.createElement("div");
		backFace.classList.add("face");
		setFloorSize(backFace,add);
		TweenMax.set(backFace,{'rotationX':0x5a,'rotationY':0x5a,'transformOrigin':'0% 0%','scaleX':s,'scaleZ':s,'scaleY':s});
		setBgImage(backFace,sideCol,sideGrad );
		cube.appendChild(backFace);

		// topFace
		var topFace=document.createElement("div");
		topFace.classList.add("face");
		setFloorSize(topFace,add);
		TweenMax.set(topFace,{'rotationX':0x5a,'rotationY':0x5a,'y':h+1,'transformOrigin':'0% 0%','scaleX':s,'scaleZ':s,'scaleY':s});
		setBgImage(topFace,sideCol,sideGrad );
		cube.appendChild(topFace);

		o.mainCont.appendChild(cube);
		def.cube.list.push( cube );
}

function setBgImage(el, color, img){
	el.style.backgroundColor = color;
	el.style.backgroundImage = img;
}

function setCubeSize(el, add){
	el.style.width = def.cube.w + add.x + "px";
	el.style.height = def.cube.h + add.y + "px";
}

function setSideSize(el, add){
	el.style.width = def.cube.z + add.x + "px";
	el.style.height = def.cube.h + add.y + "px";
}

function setFloorSize(el, add){
	el.style.width = def.cube.z + add.x + "px";
	el.style.height = def.cube.w + add.y + "px";
}

var a = {
	s1: 0.5,
	s2: 1,
	delAdd: 0.06,
	d0: 0.6,
	d1: 2,
	d2: 1.2,
	dist: 1500,
	dist2: -30000,
	e1: Elastic.easeOut.config(1.8),
	e2: Elastic.easeIn.config(0.5),
	e3: Back.easeOut.config(0.35),
	to: "50% 50% 50%",
};

var time = 0;

function rotateCubes() {
	// console.log(def.cube);
	for( var i=0; i<def.cube.amm; i++ ){
		var cube=def.cube.list[i];
		setTimeout(function(cube){
			return function(){rotateAgain(cube,1);};
		}(cube),i*50);
	}
}

function rn(){
	return 20 + (0.5 - Math.random() * 40);
}

function rotateAgain(a,v){
	TweenMax.to(a,3.5,{
			'rotationY':v*180,
			'ease':Elastic.easeInOut.config(1.2),
			'onComplete':function(){
				let that = this.target;
				setTimeout(function() {
					rotateAgain(that,v+1);
				}, 1000);				
			}
		}
	);
}


function activateButtons(){
	o.pp_wrapper.addEventListener("click", ctaFunction);
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
				

var assetsCur = 0;
var assetsTotal = 0;
var allLoaded = false;
var kaspinasImg;
var swipe_allowed = false;

function initLoad(){
	prepareElements();
	loadAsset(assets.init);
}

function prepareElements(){
	var names = oNames.id.split(' ');
	for(var i=0; i<names.length; i++){
		var name = names[i];
		o[name] = document.getElementById(name);
	};
}


function loadOther(){
	assetsTotal =  Object.size(assets);
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
		a.asset_packs 	= a.length;


		for(var k=0;k<a.asset_packs;k++){
			var names = a[k].names.split(" ");
			a[k].curLoad = 0;

			for(var i=0x0;i<names.length;i++){
				var img=new Image();
				img.myCustomData = {total: names.length, a:a, name:names[i], numb: k};
				
				img.onload=function(){
					o[this.myCustomData.name] = document.getElementById(this.myCustomData.name);
					var type = this.myCustomData.a[this.myCustomData.numb].type;
					var elAmm=1;

					if(type=='class'){
						o[this.myCustomData.name] = document.getElementsByClassName(this.myCustomData.name);
						elAmm = o[this.myCustomData.name].length;
					}
					
					for(var j=0x0;j<elAmm;j++){
						var el;
						if(type=='class'){
							el=o[this.myCustomData.name][j];
							el.style.backgroundImage= "url(" + this.src + ")";
						}else if(type=='id'){
							el=o[this.myCustomData.name];
							el.style.backgroundImage='url('+this.src+')';
						} else if( type== 'src' ){
							el=o[this.myCustomData.name];
							o[this.myCustomData.name].src =this.src;
						}
						
						el.style.position ='absolute';
						el.style.width =this.width +'px';
						el.style.height =this.height +'px';

						if(this.myCustomData.a[this.myCustomData.numb].scale != 1){
							var scale = 1/this.myCustomData.a[this.myCustomData.numb].scale;
						}


					}
					countAsset( this.myCustomData.a, this.myCustomData.numb, this.myCustomData.total );
				};
				img.src =assets_url+names[i]+'.'+a[k]['format'];
			}
		}
	}

function countAsset(asset, o, total){
	asset[o].curLoad++;
	if(asset[o].curLoad == total) {
		asset.cur_asset_pack++;
		if(asset.cur_asset_pack == asset.asset_packs){
			assetSetLoaded();
		}
	}
}

function assetSetLoaded(){
	assetsCur++;
	if(assetsCur == 1){
		init();
		TweenMax.to(pp_wrapper, 0.3, {delay: 0.05, opacity: 1});
		loadOther();
	} else if(assetsCur == assetsTotal){
		allLoaded = true;
	}
}

	Object.size = function(obj) {
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


