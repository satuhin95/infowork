var left= document.querySelector('.left')
var right= document.querySelector('.right')
var left1= document.querySelector('.left1')
var right1= document.querySelector('.right1')
var slideone = document.querySelector('.slideone')
var slidetwo = document.querySelector('.slidetwo')
var slidethree = document.querySelector('.slidethree')
var progress = document.querySelector('.progress')
var leftpercent = document.querySelector('.leftpercent')
var rightpercent = document.querySelector('.rightpercent')
var element9 = document.querySelector('.element9')
var element10 = document.querySelector('.element10')
var element11 = document.querySelector('.element11')
var element5 = document.querySelector('.element5') 
var element6 = document.querySelector('.element6') 
var element2 = document.querySelector('.element2') 
var element3 = document.querySelector('.element3') 
var date = new Date();
// console.log(date);

var matchInfo ={
   "0": {team1 : "স্কটল্যান্ড", team2 : "আয়ারল্যান্ড"},
    "1": {team1: "ওয়েস্ট ইন্ডিজ", team2: "জিম্বাবুয়ে"},
    "2": {team1 : "শ্রীলংকা", team2 : "নেদারল্যান্ডস"},
    "3": {team1: "নামিবিয়া", team2: "আরব আমিরাত"},
    "4": {team1: "ওয়েস্ট ইন্ডিজ", team2: "আয়ারল্যান্ড"},
    "5": {team1: "স্কটল্যান্ড", team2: "জিম্বাবুয়ে"},
    "6": {team1: "নিউজিল্যান্ড", team2: "অস্ট্রেলিয়া"},
    "7": {team1: "ইংল্যান্ড", team2: "আফগানিস্তান"},
};

var matchId = "2"
var match = matchInfo[matchId]
left.textContent = match.team1
right.textContent = match.team2
left1.textContent = match.team1
right1.textContent = match.team2

var team="";
element2.addEventListener('click', ()=>{
    slideAnimi();
    sendData('team1')
}) 

element3.addEventListener('click', ()=>{
    slideAnimi();
    sendData('team2')
}) 


function slideAnimi(){
    setTimeout(function(){
        slideone.classList.add('hidden');
        slidetwo.classList.remove('hidden');
        setTimeout(function(){
            element5.classList.add('hidden')
            element6.classList.add('bikeAni2');
            setTimeout(function(){
                slidetwo.classList.add('hidden');
                slidethree.classList.remove('hidden')
                setTimeout(function(){
                    element9.classList.add('hidden')
                    element10.classList.remove('hidden');
                        setTimeout(function(){
                            element10.classList.add('hidden')
                            element11.classList.remove('hidden')

                        },2000)
                },3000)
            },1300)
        },2500)
    },500)
}



function sendData(team){

    if(team){
        var data = new FormData;
        data.append('matchId', matchId);
        data.append('team', team);
    
    
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                var team1_count = response.team1;
                var team2_count = response.team2;
                var totalcount = team1_count + team2_count;
            
                    var value1 = Math.ceil(team1_count/totalcount * 100);
                    var value2 = Math.ceil(team2_count/totalcount * 100);
                    // console.log(value1,'%');
                    // console.log(value2,'%');
                    if(value1 > value2){
                        var i;
                        for(i=1; i<=value1; i++){
                            leftpercent.innerHTML = value1 + '%';
                            rightpercent.innerHTML = value2 + '%';
                        }  
                    } 
                    else{
                        var j=0;
                        for(j = 1; j<=value2; j++){
                            leftpercent.innerHTML = value1 + '%';
                            rightpercent.innerHTML = value2 + '%';
                        }
                    }
            }
        };
        xhttp.open("POST", "https://ms.purplepatch.online/arya/database/tvs/main.php");
        xhttp.send(data);
    }
    


}


