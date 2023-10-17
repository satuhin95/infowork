var status 		= 1;
let sugar  		= document.querySelector('.iis_element_2')
let tea 		= document.querySelector('.iis_element_3')
let pack 		= document.querySelector('.iis_element_4')
let placed_item = 0;

if (typeof window.orientation !== 'undefined'){
	dragElementMobile(sugar, 1);
	dragElementMobile(tea, 2);
	dragElementMobile(pack, 3);

}else{
	dragElement(sugar, 1);
	dragElement(tea, 2);
	dragElement(pack, 3);

}

function dragElement( elmnt, item ) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {  
  	$(elmnt).removeClass('shake');
  	$(elmnt).css('zIndex',99);

    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    
    document.onmousemove = elementDrag;
    document.onmouseup = closeDragElement;
  }

  function elementDrag(e) {    
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    leftSpace = elmnt.offsetLeft - pos1;

    draggedResult( elmnt, leftSpace, item );    
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function dragElementMobile(elmnt, item) {
  var pos1 = 0, pos3 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
  } else {
    elmnt.ontouchstart = dragMouseDown;
  }

  function dragMouseDown(e) {
    $(elmnt).removeClass('shake');
  	$(elmnt).css('zIndex',99);

    e.preventDefault();

    e = e.touches[0] || window.event;
    pos3 = e.clientX;
    
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e.touches[0] || window.event;
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    leftSpace = elmnt.offsetLeft - pos1;

    draggedResult(elmnt,leftSpace, item);   
  }
  function closeDragElement() {
    document.ontouchend = null;
    document.touchmove = null;
  }
}

function draggedResult(elmnt, leftSpace, item){

  	if(leftSpace>109){
  		switch (item) {
  			case 1:
  				placed_item += 1;
  				$(elmnt).addClass("slide_1_anim").removeClass('draggable');
  				break;
  			case 2:
  				placed_item += 1;
  				$(elmnt).addClass("slide_2_anim").removeClass('draggable')
  				break;
  			case 3:
  				placed_item += 1;
  				$(elmnt).addClass("slide_3_anim").removeClass('draggable')
                console.log($(".draggable").length)
  				break;
  		}

  		if ( $(".draggable").length < 2 && status == 1  ) {
  			status = 0;
            setTimeout(slideTwo,1000)

        

  		}
      
    }
    if (leftSpace<18) {leftSpace=18}
    if (leftSpace>120) {leftSpace=120}

    elmnt.style.left = leftSpace + "px";
}


function slideTwo ( ) {
	console.log('status');
	$(".iis_element_2").addClass('hideZoomOut');
	$(".iis_element_3").addClass('hideZoomOut');
	$(".iis_element_4").addClass('hideZoomOut');
	$(".iis_element_1").addClass('hideZoomOut');
	$(".iis_steam_container").addClass('hideZoomOut');
	setTimeout(function(){
		$(".iis_element_6").removeClass('hidden');
		$(".iis_steam_container2").removeClass('hidden');
	}, 1000);

}