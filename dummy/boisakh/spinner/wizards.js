var wheelBoard = document.querySelector(".wheel_board"),
    wheelPag = document.querySelector(".wheel_peg"),
    random = 0, temp='', clicked=0;

let element3 = document.querySelector(".element_3");
let element4 = document.querySelector(".element_4");
let element5 = document.querySelector(".element_5");
let element6 = document.querySelector(".element_6");
let offerButton = document.querySelector(".offer_button");
let overlay = document.querySelector(".overlay");
let buy_now = document.querySelector(".buy_now");
let cross = document.querySelector(".cross");


buy_now.style.width='70px';
buy_now.style.height='30px';
cross.style.width='20px';
cross.style.height='20px';


let links= [
'https://purplepatch.online/currents',
'https://purplepatch.online/currents',
'https://purplepatch.online/currents',
'https://purplepatch.online/currents'
];

var num=0;
function spin_wheel() {
    num= Math.floor(Math.random() * 4);
    random+=3600;
    var value=random + [75,165,256,346][num];
    wheelBoard.style.transform = "rotate(" +  value + "deg)";
    luckyDraw(num);
}

wheelBoard.addEventListener("click" , spin_wheel);

function loadGb(value){
    document.querySelector(".element_8").style.display="none";
    value.style.width="215px";
    value.style.height="138px";

    setTimeout(()=> {
        overlay.className = overlay.className.replace('hidden', 'zoomIn');
        value.className = value.className.replace('hidden', 'zoomIn');
        temp=value;
    },6e3);
}

function luckyDraw(value) {
    switch(value) {
      case 0:
        loadGb(element6);
        break;
      case 1:
        loadGb(element5);
        break;
      case 2:
        loadGb(element4);
        break;
      case 3:
        loadGb(element3);
        break;
      default:
        console.log("try again!");
    }
}

let classes = ['buyButton', 'offer'];
window.onclick = function(e){
    var clickedClass = e.target.className;
    if(classes.includes(clickedClass.trim())){
        window.open(links[num],"_blank");
        hideOverlay();
    }else{
        if(temp !=''){
            hideOverlay();
        }

    }
}


function hideOverlay(){
    setTimeout(()=>{
        overlay.className = overlay.className.replace('zoomIn', 'hidden');
        temp.className = temp.className.replace('zoomIn', 'hidden');
        setTimeout(()=>{temp='';},100)
    },200);
}
