

var btStd = document.getElementById('bt1');
var bt1feu = document.getElementById('bt2');
var btRegles = document.getElementById('bt3');
var btAbout = document.getElementById('bt4');



$("#bt1").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#bt2").animate({opacity: 0}, 1500);
    $("#bt3").animate({opacity: 0}, 1000);
    $("#bt4").animate({opacity: 0}, 500);

    
    setTimeout(function () {
        $('#allBlanc').animate({opacity: 0}, 250);
        //$("#bt1").animate({fontSize: 40}, 1000);
    }, 1250);
    
    setTimeout(function () {
        document.location.href="stdEn.html"
    }, 1500);
})


$("#bt2").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#bt1").animate({opacity: 0}, 1500);
    $("#bt3").animate({opacity: 0}, 1500);
    $("#bt4").animate({opacity: 0}, 1000);

    
    setTimeout(function () {
        $('#allBlanc').animate({opacity: 0}, 250);
        //$("#bt2").animate({fontSize: 40}, 1000);
    }, 1250);
    
    setTimeout(function () {
        document.location.href="oneEn.html"
    }, 1500);
})


$("#bt3").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#bt1").animate({opacity: 0}, 1000);
    $("#bt2").animate({opacity: 0}, 1500);
    $("#bt4").animate({opacity: 0}, 1500);

    
    setTimeout(function () {
        $('#allNoir').animate({opacity: 0}, 250);
        //$("#bt3").animate({fontSize: 40}, 1000);
    }, 1250);
    
    setTimeout(function () {
        document.location.href="rulesEn.html"
    }, 1500);
})




$("#bt4").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#bt3").animate({opacity: 0}, 1500);
    $("#bt2").animate({opacity: 0}, 1000);
    $("#bt1").animate({opacity: 0}, 500);

    
    setTimeout(function () {
        $('#allNoir').animate({opacity: 0}, 250);
        //$("#bt4").animate({fontSize: 40}, 1000);
    }, 1250);
    
    setTimeout(function () {
        document.location.href="aboutEn.html"
    }, 1500);
})

