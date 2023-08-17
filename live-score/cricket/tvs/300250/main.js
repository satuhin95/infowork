
var countryone = document.getElementById('countryone')
var countrytwo = document.getElementById('countrytwo')

 var teamone = document.getElementById('teamone')
var teamtwo = document.getElementById('teamtwo')

   getLiveScore();
   setInterval(function(){ getLiveScore(); }, 5000);
   //var data;
   function getLiveScore() {

      fetch('https://ms.purplepatch.online/saif/api/cricket/t20/data.json')
       .then((response) => response.json())
       .then((data) => {
         
           if (data.teamone==false) {
               teamone.innerText = ''
           }else{
               teamone.innerText = data.teamone.split('-')[1];
           }

           if (data.teamtwo==false) {
               teamtwo.innerText = ''
           }else{
               teamtwo.innerText = data.teamtwo.split('-')[1];
           }

            countryone.innerText = data.countryone;
           countrytwo.innerText = data.countrytwo;
           
       })

   }

       



       

       



