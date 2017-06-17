/*
Code des cases:
0: rien => blanc
1: arbre => vert
2: feu => rouge
3: cendres => gris

4: feu sur arbre => orange
5: feu sur rien => orange

6: futur feu
*/

function getWindowWidth() {
 var windowWidth=0;
 if (typeof(window.innerWidth)=='number') {
  windowWidth=window.innerWidth;
    } else {
  if (document.documentElement&& document.documentElement.clientWidth) {
   windowWidth = document.documentElement.clientWidth;
        } else {
   if (document.body&&document.body.clientWidth) {
    windowWidth=document.body.clientWidth;
            }
        }
    }
 return windowWidth;
}
 function getWindowHeight() {
    var windowHeight=0;
    if (typeof(window.innerHeight)=='number') {
        windowHeight=window.innerHeight;
    } else {
        if (document.documentElement&& document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body&&document.body.clientHeight) {
                windowHeight=document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}


var largEcran=getWindowWidth();
var hautEcran=getWindowHeight();
var taille = Math.min(largEcran, hautEcran);




var btStart = document.getElementById('start');
var btNvPartie = document.getElementById('nvPartie');

var disp_cases_cote = document.getElementById('cases_cote');
var disp_cases_total = document.getElementById('cases_total');
var disp_arbres_debut = document.getElementById('arbres_debut');
var disp_arbres_brules = document.getElementById('arbres_brules');
var disp_feux_utilises = document.getElementById('feux_utilises');
var disp_arbres_fin = document.getElementById('arbres_fin');
var disp_pourcent_brules = document.getElementById('pourcent_brules');
var disp_brules_par_feu = document.getElementById('brules_par_feu');
var disp_score = document.getElementById('score');
var disp_calcul = document.getElementById('calcul');

var playerAlumette = document.getElementById('audioAlumette');
var playerFeu = document.getElementById('audioFeu');

var rangeCote = document.getElementById('cote');
var cote_aff = document.getElementById('cote_txt');
var btDefault = document.getElementById('default_cote');

var section_resultats = document.getElementById('resultats');
var title = document.getElementById('title');

var canvas = document.getElementById('canvas');
if (!canvas) {
    alert("Impossible de récupérer le canvas");
}
var context = canvas.getContext('2d');
if (!context) {
    alert("Impossible de récupérer le context du canvas");
}




var foret = [];
var fires = 0;
var nb_arbres_debut = 0;
var nb_arbres_fin = 0;
var prob = 0.56;
var cote = 20;
var started=false;
var fireOn=false;
var taille_cote = Math.floor(taille/cote);


btDefault.onclick = function(e){
    cote = 20
    rangeCote.value = cote;
    cote_aff.value = cote;
    load();
}
function newTxt(){
    cote = cote_aff.value;
    rangeCote.value = cote;
    load();
}
function newRange(){
    cote = rangeCote.value;
    cote_aff.value = cote;
    load();
}
function load(){
    taille_cote = Math.floor(taille/cote);

    canvas.width = taille_cote*cote;
    canvas.height = taille_cote*cote;

    canvas.style.marginLeft = ((largEcran-taille_cote*cote)/2).toString() + 'px';
    
    nvlleForet();
}
load();


function nvlleForet() {
    if(fireOn==false){
        foret=[];
        started=false;
        fireOn=false;
        nb_arbres_debut=0;
        fires = 0;
        title.style.color = 'green';
        section_resultats.style.display = 'none';

        //tout blanc:
        context.fillStyle = "white";
        context.fillRect(0, 0, taille, taille);

        //nouvelle forêt:
        for(j=0; j<cote; j++){
            var ligne=[];
            for(i=0; i<cote; i++){
                if(Math.random()<prob){
                    ligne.push(1);
                    context.fillStyle = "green";
                    nb_arbres_debut++;
                }else{
                    ligne.push(0);
                    context.fillStyle = "white";
                }
                context.fillRect(i*taille_cote, j*taille_cote, taille_cote, taille_cote);
            }
            foret.push(ligne);
        }
    }
}
//nouvelle partie
btNvPartie.onclick = nvlleForet
//début
nvlleForet()



canvas.onclick = function(e) {
    if(started==false){
        title.style.color = 'orange';
        var x = e.clientX-canvas.offsetLeft
        var y = e.clientY-canvas.offsetTop
        var i = (x-(x%taille_cote))/taille_cote
        var j = (y-(y%taille_cote))/taille_cote
        if(foret[j][i]===0){
            foret[j][i] = 5
            fires++;
            context.fillStyle = "orange";
            context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
        } else if(foret[j][i]===1){
            foret[j][i] = 4
            fires++;
            context.fillStyle = "orange";
            context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
        } else if(foret[j][i]===4){
            foret[j][i] = 1
            fires--;
            context.fillStyle = "green";
            context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
        } else if(foret[j][i]===5){
            foret[j][i] = 0
            fires--;
            context.fillStyle = "white";
            context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
        }
    }
};







//annimation
btStart.onclick = function(e) {
    if(started==false){
        //son d'allumette
        playerAlumette.play();
        
        started=true;
        fireOn=true;
        title.style.color = 'red';


        for(i=0; i<cote; i++){
            for(j=0; j<cote; j++){
                if(foret[j][i]===4 || foret[j][i]===5){
                    foret[j][i]=2
                    context.fillStyle = "red";
                    context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
                }
            }
        }
        etape();
    }
}

//une étape
function etape(){
    //gris=>blanc
    //rouge=>gris
    for(i=0; i<cote; i++){
        for(j=0; j<cote; j++){
            if(foret[j][i]===3){
                foret[j][i]=0
                context.fillStyle = "white";
                context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
            }
            if(foret[j][i]===2){
                foret[j][i]=3
                context.fillStyle = "grey";
                context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
            }
        }
    }
    //si feu à proximité: vert=>rouge
    for(i=0; i<cote; i++){        
        for(j=0; j<cote; j++){
            if(foret[j][i]===1){
                if(i>0 && foret[j][i-1]===3){
                    foret[j][i]=2
                    context.fillStyle = "red";
                    context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
                }
                if(j>0 && foret[j-1][i]===3){
                    foret[j][i]=2
                    context.fillStyle = "red";
                    context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
                }
                if(i<cote-1 && foret[j][i+1]===3){
                    foret[j][i]=2
                    context.fillStyle = "red";
                    context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
                }
                if(j<cote-1 && foret[j+1][i]===3){
                    foret[j][i]=2
                    context.fillStyle = "red";
                    context.fillRect(i*taille_cote, j*taille_cote,taille_cote, taille_cote);
                }
            }    
        }
    }
    
    //détection de la fin de l'incendie
    var fin=true;
    for(i=0; i<cote; i++){
        for(j=0; j<cote; j++){
            if(foret[j][i]===3 || foret[j][i]===2){
                fin=false;
            }
        }
    }
    //fin de l'annimation
    if(!fin){
        setTimeout(etape, 150);
    } else{
        title.style.color = 'grey';
        resultats();
    }
}


function resultats() {
    //vert=>vert clair
    //+ comptage du nombre d'arbres
    nb_arbres_fin=0
    for(i=0; i<cote; i++){
        for(j=0; j<cote; j++){
            if(foret[j][i]===1){
                nb_arbres_fin++;
                context.fillStyle = "lightgreen";
                context.fillRect(i*taille_cote, j*taille_cote, taille_cote, taille_cote);
            }
        }
    }
    /////CALCUL
    var nb_arbres_brules = nb_arbres_debut - nb_arbres_fin;
    if(nb_arbres_debut==0){
        var pourcent_brules =  "#";
    } else{
        var pourcent_brules =  Math.round((nb_arbres_brules/nb_arbres_debut)*100*100)/100;
    }
    if(fires==0){
        var brule_par_feu = "#";
    } else{
        var brule_par_feu = Math.round((nb_arbres_brules/fires)*100)/100;
    }
    var score = nb_arbres_brules-cote*0.5*fires;



    /////AFFICHAGE
    section_resultats.style.display = 'block';
    
    
    disp_cases_cote.innerHTML="côté de la fôret " + cote;    
    
    if(nb_arbres_debut<=1){
        disp_arbres_debut.innerHTML="arbre au début " + nb_arbres_debut;
    } else{
        disp_arbres_debut.innerHTML="arbres au début " + nb_arbres_debut;
    }

    if(nb_arbres_brules<=1){
        disp_arbres_brules.innerHTML="arbre brulé " + nb_arbres_brules;
    } else{
        disp_arbres_brules.innerHTML="arbres brulés " + nb_arbres_brules;
    }

    if(fires<=1){
        disp_feux_utilises.innerHTML="feu utilisé " + fires;
    } else{
        disp_feux_utilises.innerHTML="feux utilisés " + fires;
    }
    
    /////////////////////////////////////////////////////////////////////////////////////
    disp_cases_total.innerHTML=(cote*cote).toString() + " cases en tout";

    if(nb_arbres_fin<=1){
        disp_arbres_fin.innerHTML=nb_arbres_fin + " arbre à la fin";
    } else{
        disp_arbres_fin.innerHTML=nb_arbres_fin + " arbres à la fin";
    }

    disp_pourcent_brules.innerHTML=pourcent_brules + " % brûlés";

    if(brule_par_feu<=1){
        disp_brules_par_feu.innerHTML=brule_par_feu + " brûlé/feu"
    } else{
        disp_brules_par_feu.innerHTML=brule_par_feu + " brûlés/feu"
    }
    
    disp_score.innerHTML=score;
    disp_calcul.innerHTML='(' + nb_arbres_brules + '-'+cote/2+'*' + fires + ')';
    
    
    fireOn=false;
}
