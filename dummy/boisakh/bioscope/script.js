var myChoice = 0;

$('.patch_slider_2').css({display : 'none'});

$('.patch_board,.patch_board_left,.patch_board_right,.patch_offer').click(()=>{
    myChoice++;
    $('.patch_board').toggleClass('animate');
    if (myChoice%2 != 0){
        zoomInAll();
    }
    else {
        zoomOutAll();
    }
});

function zoomInAll() {
    $('.patch_slider').css({display : 'none'});
    $('.patch_board_right').css({display : 'none'});
    $('.patch_board_left').css({display : 'none'});
    $('.patch_des').css({display : 'none'});
    $('.patch_boisak').css({display : 'none'});
    $('.patch_offer').css({display : 'none'});
    setTimeout(()=>{
        $('.patch_slider_2').css({display : 'block'});
        $('.patch_cta').css({display : 'block'});
    },1.5e3);
}

function zoomOutAll() {
    $('.patch_slider_2').css({display : 'none'});
    $('.patch_cta').css({display : 'none'});
    $('.patch_board_right').css({display : 'block'});
    $('.patch_board_left').css({display : 'block'});
    $('.patch_des').css({display : 'block'});
    $('.patch_boisak').css({display : 'block'});
    $('.patch_offer').css({display : 'block'});
    setTimeout(()=>{
        $('.patch_slider').css({display : 'block'});
    },1.5e3);
}

$('.patch_cta').click(()=>{
   window.open('https://purplepatch.online/currents','_blank');
});
