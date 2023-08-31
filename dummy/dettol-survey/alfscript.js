var trueAnswer = [
    '1a','2b','3b','4b','5a'
];

var scoreImage = [
    'img/score0.jpg',
    'img/score1.jpg',
    'img/score2.jpg',
    'img/score3.jpg',
    'img/score4.jpg',
    'img/score5.jpg'
]

var userAnswer = [];

$('.ans_a_1').click(()=>{
    userAnswer.push('1a');
    firstSelection();
});

$('.ans_a_2').click(()=>{
    userAnswer.push('1b');
    firstSelection();
});

$('.ans_b_1').click(()=>{
    userAnswer.push('2a');
    secondSelection();
});

$('.ans_b_2').click(()=>{
    userAnswer.push('2b');
    secondSelection();
});


$('.ans_c_1').click(()=>{
    userAnswer.push('3a');
    thirdSelection();
});

$('.ans_c_2').click(()=>{
    userAnswer.push('3b');
    thirdSelection();
});


$('.ans_d_1').click(()=>{
    userAnswer.push('4a');
    fourthSelection();
});

$('.ans_d_2').click(()=>{
    userAnswer.push('4b');
    fourthSelection();
});

$('.ans_e_1').click(()=>{
    userAnswer.push('5a');
    console.log(userAnswer);
    fifthSelection();
});

$('.ans_e_2').click(()=>{
    userAnswer.push('5b');
    console.log(userAnswer);
    fifthSelection();
});

function firstSelection() {
    $('.ans_a_1,.ans_a_2').css({ opacity: 0});
    $(".ans_b_1").animate({left:"+" + $('.ans_a_1').position().left});
    $(".ans_b_2").animate({left:"+" + $('.ans_a_2').position().left});
}

function secondSelection() {
    $('.ans_b_1,.ans_b_2').css({ opacity: 0});
    $(".ans_c_1").animate({left:"+" + $('.ans_a_1').position().left});
    $(".ans_c_2").animate({left:"+" + $('.ans_a_2').position().left});
}

function thirdSelection() {
    $('.ans_c_1,.ans_c_2').css({ opacity: 0});
    $(".ans_d_1").animate({left:"+" + $('.ans_a_1').position().left});
    $(".ans_d_2").animate({left:"+" + $('.ans_a_2').position().left});
}

function fourthSelection() {
    $('.ans_d_1,.ans_d_2').css({ opacity: 0});
    $(".ans_e_1").animate({left:"+" + $('.ans_a_1').position().left});
    $(".ans_e_2").animate({left:"+" + $('.ans_a_2').position().left});
}


function fifthSelection() {
    $('.ans_e_1,.ans_e_2').css({ opacity: 0});

    var n = 0, p = 0;
    for (n; n<5; n++) {
        if (trueAnswer[n] == userAnswer[n]) {
            p++;
        };
    }
    console.log(p);
    $('.dettol_result').css('backgroundImage', 'url('+scoreImage[p]+')');
    setTimeout(()=>{
        $(".dettol_result").css({zIndex: 100});
        $(".dettol_result").animate({left:"+" + 0});
    },200);

    setTimeout(()=>{
        $(".dettol_end").animate({left:"+" + 0});
    },5e3);
}


