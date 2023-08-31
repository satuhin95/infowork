var swapIcon = document.querySelectorAll('.column img');


for (let i=0; i<swapIcon.length; i++){
    swapIcon[i].addEventListener('click',()=>{
        console.log(swapIcon[i]);
    });
}