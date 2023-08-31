var myJoma,myYear;

$("select option:first-child").attr("disabled", "disabled");
$(".delta_year").attr("disabled", "disabled");
$('.delta_joma').change(()=>{
    myJoma = $( ".delta_joma option:selected" ).text();
    $(".delta_year").removeAttr("disabled", "disabled");
    $('.delta_earn').val('');
    $('.delta_year').val('');
});

$('.delta_year').change(()=>{
    myJoma = $( ".delta_joma option:selected" ).text();
    myYear = $( ".delta_year option:selected" ).text();
    earningCalc();
});

function earningCalc() {
    switch (Number(myJoma)+Number(myYear)) {
        case 1010:
            $('.delta_earn').val('195000');
            break;

        case 1011:
            $('.delta_earn').val('215000');
            break;

        case 1012:
            $('.delta_earn').val('230000');
            break;

        case 1013:
            $('.delta_earn').val('250000');
            break;

        case 1014:
            $('.delta_earn').val('270000');
            break;

        case 1015:
            $('.delta_earn').val('381000');
            break;

        case 1016:
            $('.delta_earn').val('405000');
            break;

        case 1017:
            $('.delta_earn').val('435000');
            break;

        case 1018:
            $('.delta_earn').val('455000');
            break;

        case 1019:
            $('.delta_earn').val('480000');
            break;

        case 1020:
            $('.delta_earn').val('655000');
            break;

        case 3010:
            $('.delta_earn').val('585000');
            break;

        case 3011:
            $('.delta_earn').val('645000');
            break;

        case 3012:
            $('.delta_earn').val('690000');
            break;

        case 3013:
            $('.delta_earn').val('750000');
            break;

        case 3014:
            $('.delta_earn').val('810000');
            break;

        case 3015:
            $('.delta_earn').val('1143000');
            break;

        case 3016:
            $('.delta_earn').val('1215000');
            break;

        case 3017:
            $('.delta_earn').val('1305000');
            break;

        case 3018:
            $('.delta_earn').val('1365000');
            break;

        case 3019:
            $('.delta_earn').val('1440000');
            break;

        case 3020:
            $('.delta_earn').val('1965000');
            break;

        case 5010:
            $('.delta_earn').val('975000');
            break;

        case 5011:
            $('.delta_earn').val('1075000');
            break;

        case 5012:
            $('.delta_earn').val('1150000');
            break;

        case 5013:
            $('.delta_earn').val('1250000');
            break;

        case 5014:
            $('.delta_earn').val('1350000');
            break;

        case 5015:
            $('.delta_earn').val('1905000');
            break;

        case 5016:
            $('.delta_earn').val('2025000');
            break;

        case 5017:
            $('.delta_earn').val('2175000');
            break;

        case 5018:
            $('.delta_earn').val('2275000');
            break;

        case 5019:
            $('.delta_earn').val('2400000');
            break;

        case 5020:
            $('.delta_earn').val('3275000');
            break;

        case 10010:
            $('.delta_earn').val('1950000');
            break;

        case 10011:
            $('.delta_earn').val('2150000');
            break;

        case 10012:
            $('.delta_earn').val('2300000');
            break;

        case 10013:
            $('.delta_earn').val('2500000');
            break;

        case 10014:
            $('.delta_earn').val('2700000');
            break;

        case 10015:
            $('.delta_earn').val('3810000');
            break;

        case 10016:
            $('.delta_earn').val('4050000');
            break;

        case 10017:
            $('.delta_earn').val('4350000');
            break;

        case 10018:
            $('.delta_earn').val('4550000');
            break;

        case 10019:
            $('.delta_earn').val('4800000');
            break;

        case 10020:
            $('.delta_earn').val('6550000');
            break;

        case 15010:
            $('.delta_earn').val('2925000');
            break;

        case 15011:
            $('.delta_earn').val('3225000');
            break;

        case 15012:
            $('.delta_earn').val('3450000');
            break;

        case 15013:
            $('.delta_earn').val('3750000');
            break;

        case 15014:
            $('.delta_earn').val('4050000');
            break;

        case 15015:
            $('.delta_earn').val('5715000');
            break;

        case 15016:
            $('.delta_earn').val('6075000');
            break;

        case 15017:
            $('.delta_earn').val('6525000');
            break;

        case 15018:
            $('.delta_earn').val('6825000');
            break;

        case 15019:
            $('.delta_earn').val('7200000');
            break;

        case 15020:
            $('.delta_earn').val('9825000');
            break;

        case 25010:
            $('.delta_earn').val('4875000');
            break;

        case 25011:
            $('.delta_earn').val('5375000');
            break;

        case 25012:
            $('.delta_earn').val('5750000');
            break;

        case 25013:
            $('.delta_earn').val('6250000');
            break;

        case 25014:
            $('.delta_earn').val('6750000');
            break;

        case 25015:
            $('.delta_earn').val('9525000');
            break;

        case 25016:
            $('.delta_earn').val('10125000');
            break;

        case 25017:
            $('.delta_earn').val('10875000');
            break;

        case 25018:
            $('.delta_earn').val('11375000');
            break;

        case 25019:
            $('.delta_earn').val('12000000');
            break;

        case 25020:
            $('.delta_earn').val('16375000');
            break;

        default:
            $('.delta_earn').val('195000');
            break;
    }
    setTimeout(function(){
        $('.landing').css({'opacity' : '1'});
    },1000);
}
