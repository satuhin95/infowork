/*
    Animation Author: Lincoln Mahmud
    Last update: 13/06/2021
*/
let slide_1     = document.querySelector('.slide_1');
let slide_2     = document.querySelector('.slide_2');
let slide_3     = document.querySelector('.slide_3');

setTimeout( slide_1_show, false);
function slide_1_show( ) {
    slide_2.className = slide_2.className.replace("toLeft","hidden");
    slide_1.className = slide_1.className.replace("hidden","toLeft");
    setTimeout(function() {
        slide_1.className = slide_1.className.replace("toLeft","hidden");
        slide_2.className = slide_2.className.replace("hidden","toLeft");
        setTimeout(function() {
            slide_2.className = slide_2.className.replace("toLeft","hidden");
                setTimeout(slide_1_show, false);
        }, 3000);
    }, 3000);
}

var displayCounter = document.querySelector('.patch_countdown');
var displayTitle = document.querySelector('.patch_title');

var media_url = '//ms.purplepatch.online/countdown/foodpanda/june-21/khusir-deal-300250/';
var sports = {
    "italy-vs-switzerland" : { "date" : new Date("June 17,2021 01:00:00"), "flag" : media_url + 'ItalyVsSwitzerland.png' },
    "denmark-vs-belgium" : { "date" : new Date("June 17,2021 22:00:00"), "flag" : media_url + 'DenmarkVsBelgium.png' },
    "netherland-vs-austria" : { "date" : new Date("June 18,2021 01:00:00"), "flag" : media_url + 'NetherlandsVsAustria.png' },
    "england-vs-scotland" : { "date" : new Date("June 19,2021 01:00:00"), "flag" : media_url + 'EnglandVsScotland.png' },
    "hungary-vs-france" : { "date" : new Date("June 19,2021 19:00:00"), "flag" : media_url + 'HungaryVsFrance.png' },
    "portugal-vs-germany" : { "date" : new Date("June 19,2021 22:00:00"), "flag" : media_url + 'PortugalVsGermany.png' },
    "spain-vs-poland" : { "date" : new Date("June 20,2021 01:00:00"), "flag" : media_url + 'SpainVsPoland.png' },
    "italy-vs-wales" : { "date" : new Date("June 20,2021 22:00:00"), "flag" : media_url + 'ItalyVsWales.png' },
    "finland-vs-belgium" : { "date" : new Date("June 22,2021 01:00:00"), "flag" : media_url + 'FinlandVsBelgium.png' },
    "czechRepublic-vs-england" : { "date" : new Date("June 23,2021 01:00:00"), "flag" : media_url + 'CzechRepublicVsEngland.png' },
    "slovakia-vs-spain" : { "date" : new Date("June 23,2021 22:00:00"), "flag" : media_url + 'SlovakiaVsSpain.png' },
    "germany-vs-hungary" : { "date" : new Date("June 24,2021 01:00:00"), "flag" : media_url + 'GermanyVsHungary.png' },
    "portugal-vs-france" : { "date" : new Date("June 24,2021 01:00:00"), "flag" : media_url + 'PortugalVsFrance.png' },
    "wales-vs-denmark": {"date": new Date("June 26,2021 22:00:00"),"flag": media_url + "walesvsdenmark.png"},
    "italy-vs-austria": {"date": new Date("June 27,2021 01:00:00"),"flag": media_url + "italyvsaustria.png"},
    "netherlands-vs-czechRepublic": {"date": new Date("June 27,2021 22:00:00"),"flag": media_url + "netherlandsvsczechrepublic.png"},
    "belgium-vs-portugal": {"date": new Date("June 28,2021 01:00:00"),"flag": media_url + "belgiumvsportugal.png"},
    "croatia-vs-spain": {"date": new Date("June 28,2021 22:00:00"),"flag": media_url + "croatiavsspain.png"},
    "france-vs-switzerland": {"date": new Date("June 29,2021 01:00:00"),"flag": media_url + "francevsswitzerland.png"},
    "england-vs-germany": {"date": new Date("June 29,2021 22:00:00"),"flag": media_url + "englandvsgermany.png"},
    "sweden-vs-ukraine": {"date": new Date("June 30,2021 01:00:00"),"flag": media_url + "swedenvsukraine.png"},
    "switzerland-vs-spain": { "date": new Date("July 02,2021 22:00:00"),"flag": media_url + "switzerlandvsspain.png"},
    "belgium-vs-italy": { "date": new Date("July 03,2021 01:00:00"),"flag": media_url + "belgiumvsitaly.png"},
    "czechrepublic-vs-denmark": { "date": new Date("July 03,2021 22:00:00"),"flag": media_url + "czechrepublicvsdenmark.png"},
    "ukraine-vs-england": { "date": new Date("July 04,2021 01:00:00"),"flag": media_url + "ukrainevsengland.png"},
    "italy-vs-spain": { "date": new Date("July 07,2021 01:00:00"),"flag": media_url + "italyvsspain.png"},
    "england-vs-denmark": { "date": new Date("July 29,2021 01:00:00"),"flag": media_url + "englandvsdenmark.png"},
    "italy-vs-england": { "date": new Date("July 12,2021 01:00:00"),"flag": media_url + "italyvsengland.png"},
};


function countdown_runner ( info ) {
    displayTitle.innerHTML = `<img src="${info['flag']}" alt="">`;;
    if ( document.location.host == 'ms.purplepatch.online' && document.location.pathname.includes("adgallery") ) {
        countdown ( info['date'].setDate( new Date().getDate()+2 ));
    }  else if(info['flag']=='//ms.purplepatch.online/countdown/foodpanda/june-21/khusir-deal-300250/italyvsengland.png'){
        var date = new Date();
        countdown ( date.setDate(date.getDate() + 30));
    } else {
        countdown ( info['date'] );
    }
}

function countdown ( countDate ) 
{
    var gap = countDate - new Date().getTime();

    if( gap > 0) {
        var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

        var textDay = Math.floor(gap/day);
        var textHour = Math.floor((gap%day) / hour);
        var textMinute = Math.floor((gap%hour) / minute);
        var textSecond = Math.floor((gap%minute) / second);
        
        var _day = textDay < 10? "0"+textDay : textDay;
        var _hour = textHour < 10? "0"+textHour : textHour;
        var _minute = textMinute < 10? "0"+textMinute : textMinute;
        var _second = textSecond < 10? "0"+textSecond : textSecond;

        displayCounter.innerHTML = `<span class="day absolute">${_day}</span><span class="hour absolute">${_hour}</span><span class="minute absolute">${_minute}</span><span class="second absolute">${_second}</span>`;

    }

    setTimeout( function(){countdown(countDate);}, 1000 );

}