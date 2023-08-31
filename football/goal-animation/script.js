var element_1 = document.querySelector('.element_1')
var ball = document.querySelector('.ball')
var goal = document.querySelector('.goal')
var element_2 = document.querySelector('.element_2')
var teamOneName = document.querySelector('.teamOneName')
var teamTwoName = document.querySelector('.teamTwoName')
var scoreOne = document.querySelector('.scoreOne')
var scoreTwo = document.querySelector('.scoreTwo')
var min = document.querySelector('.min')




function  slide(){
    setTimeout(function(){
        element_1.classList.add('hidden')
        ball.classList.add('pluseAnimi');
        setTimeout(function(){
            goal.classList.remove('hidden');
            setTimeout(function(){
                ball.classList.remove('pluseAnimi')
                goal.classList.add('hidden')
                element_2.classList.remove('hidden');
                setTimeout(function(){
                    element_1.classList.remove('hidden');
                    element_2.classList.add('hidden');
                },3000)
            },3000)
        },200)
    },2000)
}

dataFetch();
setInterval(() => {
  dataFetch();
}, 5000);

function dataFetch(){
  fetch('//ms.purplepatch.online/football-live-api/data.json')
  .then(res => res.json())
  .then(data => dataOperation(data))
}




function dataOperation(data) {
  if(data.gameStatus == 'NSY'){
    scoreOne.textContent = '00';
    scoreTwo.textContent = '00';
  }else{
    dataCheck(data.score)
    scoreOperation(data.score)
  }
  
//   console.log(data.time.split('&')[0]);
//   console.log(data.score);


  if(data.time==="FT"){
    min.textContent = "00"
  }else{
    min.textContent = data.time.split('&')[0]
  }
  teamOneName.textContent = data.checkTeamOne;
  teamTwoName.textContent = data.checkTeamTwo;
}
function dataCheck(score){
    if(window.localStorage.hasOwnProperty('myScore')){
        var myScore = window.localStorage.getItem('myScore');

    if((score.split('-')[0].trim()!= myScore.split('-')[0].trim()) || score.split('-')[1].trim()!= myScore.split('-')[1].trim()){
        window.localStorage.setItem('myScore', score);
        slide();
    
    }
    }else{
        window.localStorage.setItem('myScore', score)
        console.log("not")
    }
  
}



function scoreOperation(score){
  check = score.trim().split(/\s+/);
  teamOneScore =check[0];
  teamTwoScore = check[2];
  if(parseInt(teamOneScore,10)<10){ teamOneScore = '0'+teamOneScore}
  if(parseInt(teamTwoScore,10)<10){ teamTwoScore = '0'+teamTwoScore}

  scoreOne.textContent = teamOneScore;
  scoreTwo.textContent = teamTwoScore;
}
