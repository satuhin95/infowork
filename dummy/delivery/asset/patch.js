let gposX = 15;
let bposX = -15;
let boxPurple = document.querySelector('.purple_box');
let bikePathao = document.querySelector('.pathao_bike');
let width = 715;
bikePathao.style.left = 40+"px";
var vanMove = setInterval(function () {
    if (gposX>50 && bposX > 5) {
    	gposX+= 5;
    	bposX += 5;
    	bikePathao.style.left = gposX+"px";
    	boxPurple.style.left = -bposX+'px';
    	if(gposX == 705){
        	bposX = -15;
        	gposX = 15;
    	}
    }
    else{
    	gposX+= 5;
    	bposX+=5;
    }
},75);
