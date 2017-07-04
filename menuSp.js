var delai4=250;
var delai3=500;
var delai2=750;
var delai1=1000;


$("#btStd").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#btOne").animate({opacity: 0}, delai1);
    $("#btMulti").animate({opacity: 0}, delai2);
    $("#btRules").animate({opacity: 0}, delai3);
    $("#btAbout").animate({opacity: 0}, delai4);

    
    setTimeout(function () {
        $('#allBlanc').animate({opacity: 0}, delai4);
        //$("#btStd").animate({fontSize: 40}, delai2);
    }, delai1-delai4);
    
    setTimeout(function () {
        document.location.href="stdSp.html"
    }, delai1);
})


$("#btOne").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#btStd").animate({opacity: 0}, delai1);
    $("#btMulti").animate({opacity: 0}, delai1);
    $("#btRules").animate({opacity: 0}, delai2);
    $("#btAbout").animate({opacity: 0}, delai3);

    
    setTimeout(function () {
        $('#allBlanc').animate({opacity: 0}, delai4);
        //$("#btOne").animate({fontSize: 40}, delai2);
    }, delai1-delai4);
    
    setTimeout(function () {
        document.location.href="oneSp.html"
    }, delai1);
})


$("#btMulti").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#btStd").animate({opacity: 0}, delai2);
    $("#btOne").animate({opacity: 0}, delai1);
    $("#btRules").animate({opacity: 0}, delai1);
    $("#btAbout").animate({opacity: 0}, delai2);

    
    setTimeout(function () {
        $('#allNoir').animate({opacity: 0}, delai4);
        //$("#btRules").animate({fontSize: 40}, delai2);
    }, delai1-delai4);
    
    setTimeout(function () {
        document.location.href="multiSp.html"
    }, delai1);
})


$("#btRules").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#btStd").animate({opacity: 0}, delai3);
    $("#btOne").animate({opacity: 0}, delai2);
    $("#btMulti").animate({opacity: 0}, delai1);
    $("#btAbout").animate({opacity: 0}, delai1);

    
    setTimeout(function () {
        $('#allNoir').animate({opacity: 0}, delai4);
        //$("#btRules").animate({fontSize: 40}, delai2);
    }, delai1-delai4);
    
    setTimeout(function () {
        document.location.href="rulesSp.html"
    }, delai1);
})


$("#btAbout").click(function(e) {
    e.preventDefault();
    $("#flame1").hide();
    $("#flame2").hide();
    $("#btStd").animate({opacity: 0}, delai4);
    $("#btOne").animate({opacity: 0}, delai3);
    $("#btMulti").animate({opacity: 0}, delai2);
    $("#btRules").animate({opacity: 0}, delai1);

    
    setTimeout(function () {
        $('#allNoir').animate({opacity: 0}, delai4);
        //$("#btAbout").animate({fontSize: 40}, delai2);
    }, delai1-delai4);
    
    setTimeout(function () {
        document.location.href="aboutSp.html"
    }, delai1);
})

