    var slide_1 = document.querySelector('.slide_1');
    var slide_2 = document.querySelector('.slide_2');
    var slide_3 = document.querySelector('.slide_3');
    var slide_4 = document.querySelector('.slide_4');

    setTimeout( slide_1_show, false);
    function slide_1_show( ) {
        slide_1.className = slide_1.className.replace("hidden","toLeft");
        setTimeout(function() {
            slide_3.className = slide_3.className.replace("toLeft","hidden");
            slide_2.className = slide_2.className.replace("hidden","toLeft");
            setTimeout(function() {
                slide_1.className = slide_1.className.replace("toLeft","hidden");
                slide_3.className = slide_3.className.replace("hidden","toLeft");
                setTimeout(function() {
                    slide_2.className = slide_2.className.replace("toLeft","hidden");
                    slide_4.className = slide_4.className.replace("hidden","toLeft");
                    setTimeout(function(){
                        slide_4.className = slide_4.className.replace("toLeft","hidden");
                        setTimeout(slide_1_show,false)
                    },3000)
                    
                }, 3000);
            }, 3000);
        }, 3000);
    }


