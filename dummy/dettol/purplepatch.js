

$(".slide_zero").click(first_slide);

setTimeout(function() {
    $(".element_1_2").removeClass("hidden");
}, 800);

function first_slide(){
    $(".slide_1").removeClass("hidden");
    $(".slide_zero").addClass("hidden");    
}

function second_slide(){
    $(".slide_1").addClass("hidden");
    setTimeout(function() {$(".slide_2").removeClass("hidden");}, 1e3);
}

function third_slide(){    
    $(".slide_2").addClass("hidden");   
    setTimeout(function() {$(".slide_3").removeClass("hidden");}, 1e3); 
}

function fourth_slide(){    
    $(".slide_3").addClass("hidden");  
    setTimeout(function() {$(".slide_4").removeClass("hidden");}, 1e3);   
}

function fifth_slide(){    
    $(".slide_4").addClass("hidden");   
    setTimeout(function() {$(".slide_5").removeClass("hidden");}, 1e3);  
}

function sixth_slide(){    
    $(".slide_5").addClass("hidden");    
    setTimeout(function() {$(".slide_6").removeClass("hidden");}, 1e3); 
}

var imagePath='//ms.purplepatch.online/dummy/dettol/images/';

$('.positive_answer').each(function () {
    var $this = $(this);
    $this.on("click", function () {
        var yes_answer= $(this).data('id');
        switch(yes_answer){
            case 1: 
           		$("#wrong_audio")[0].play();
                second_slide();
                result_loop(imagePath+'not_correct.jpg',imagePath+"rosun_yes.jpg");         
                break;
            case 2: 
            	$("#wrong_audio")[0].play();
                third_slide(); 
                result_loop(imagePath+'not_correct.jpg',imagePath+"mosa_yes.jpg");         
                break;
            case 3: 
            	$("#correct_audio")[0].play();
                fourth_slide();
                result_loop(imagePath+'correct.jpg',null,null);          
                break;
            case 4: 
            	$("#correct_audio")[0].play();
                fifth_slide();
                result_loop(imagePath+'correct.jpg',null,null);          
                break;
            case 5:
            	$("#wrong_audio")[0].play(); 
                sixth_slide();
                result_loop(imagePath+'not_correct.jpg',imagePath+"posu_yes.jpg");          
                break;
            default:
                break;
        }
        console.log('positive '+yes_answer);
    });
});

$('.negative_answer').each(function () {
    var $this = $(this);
    $this.on("click", function () {
        var no_answer= $(this).data('id');
        switch(no_answer){
            case 1: 
            	$("#correct_audio")[0].play();
                second_slide();
                result_loop(imagePath+'correct.jpg',null,null);               
                break;
            case 2: 
            	$("#correct_audio")[0].play();
                third_slide();
                result_loop(imagePath+'correct.jpg',null,null);                
                break;
            case 3: 
            	$("#wrong_audio")[0].play();
                fourth_slide();
                result_loop(imagePath+'not_correct.jpg',imagePath+"weather_no.jpg");                
                break;
            case 4: 
            	$("#wrong_audio")[0].play();
                fifth_slide();
                result_loop(imagePath+'not_correct.jpg',imagePath+"cigarette_no.jpg");                
                break;
            case 5: 
            	$("#correct_audio")[0].play();
                sixth_slide();
                result_loop(imagePath+'correct.jpg',null,null);                
                break;
            default:
                break;
        }
        console.log('negative '+no_answer);
    });
});

function result_loop(answer,image=null,correct=true){
    setTimeout(function() {
        $(".answer_image img").attr("src", answer);
        $(".answer_area").removeClass("hidden");
        $(".answer_image").addClass("fadeInUp");

        if (image) {
        	setTimeout(function() {
	        	$(".answer_image").removeClass("fadeInUp");
	        	$(".answer_image").addClass("fadeInUp");
	        	$(".answer_image img").attr("src", image);
	        }, 1500);
        }
        var duration = correct ? 4000 : 1700;         
        setTimeout(function() {
            console.log(duration);
            $(".answer_area").addClass("hidden");
            $(".answer_image").removeClass("fadeInUp");
        }, duration);                

    }, 0);
}

function remove_class(element, classname) {
    element.className = element.className.replace(classname, '');
}

function add_class(element, classname) {
    element.classList ? element.classList.add(classname) : element.className += (' ' + classname);
}

