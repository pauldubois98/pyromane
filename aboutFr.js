
var btRetour = document.getElementById('bt1');
var btRegles = document.getElementById('bt2');

btRetour.onclick = function(e){
    e.preventDefault();
    $("#bt2").animate({opacity: 0}, 500);
    
    setTimeout(function () {
        $('#all').animate({opacity: 0}, 250);
    }, 500);
    
    setTimeout(function () {
        document.location.href="menuFr.html"
    }, 750);
}


btRegles.onclick = function(e){
    e.preventDefault();
    $("#bt1").animate({opacity: 0}, 500);
    
    setTimeout(function () {
        $('#all').animate({opacity: 0}, 250);
    }, 500);
    
    setTimeout(function () {
        document.location.href="rulesFr.html"
    }, 750);
}