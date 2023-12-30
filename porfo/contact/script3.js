
var vang = document.getElementsByClassName('vang');
var den = document.getElementsByClassName('den');
var note = 0;

function getpre(){

    var el = den[0];
    var rem = vang[0];
    el.classList.add('hide');
    rem.classList.remove('hide');
    note = 1;
    

}
function reset1(){
    var el = den[0];
    var rem = vang[0];
    el.classList.remove('hide');
    rem.classList.add('hide');
    note=0;
}
function getdeux(){
    for(let i =0; i < 2; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.add('hide');
       rem.classList.remove('hide');
       note= 2;
    }
}
function reset2(){
    for(let i =0; i < 2; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.remove('hide');
       rem.classList.add('hide');
       note= 0;

    }
}
function gettrois(){
    for(let i =0; i < 3; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.add('hide');
       rem.classList.remove('hide');
       note= 3;
    }
}
function reset3(){
    for(let i =0; i < 3; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.remove('hide');
       rem.classList.add('hide');
       note=0;
    }
}
function getqatre(){
    for(let i =0; i < 4; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.add('hide');
       rem.classList.remove('hide');
       note=4;
    }
}
function reset4(){
    for(let i =0; i < 4; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.remove('hide');
       rem.classList.add('hide');
       note=0;
    }
}
function getcinq(){
    for(let i =0; i < 5; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.add('hide');
       rem.classList.remove('hide');
       note=5;
    }
}
function reset5(){
    for(let i =0; i < 5; i++ ){
        var el = den[i];
        var rem = vang[i];
        el.classList.remove('hide');
       rem.classList.add('hide');
       note=0;
    }
}

function getdata(){
    var Data={
        nom :document.getElementById("nom").value,
        prenom : document.getElementById("prenom").value,
        mail: document.getElementById("mail").value,
        telephone: document.getElementById("telephone").value,
        mark : note,
        presentation : function(){
            if(this.nom=="" || this.prenom=="" || this.mail =="" ||this.telephone ==""){
                alert("il faut remplir tous les informations");
            }
            else{
                if(this.mark == 0){
                    alert("Bonjour, je suis  "+this.prenom+" "+this.nom +" vous pouvez me contacter sur"+this.mail +" ou au "+this.telephone +"pas rating");
                }
                else{
                    alert("Bonjour, je suis  "+this.prenom+" "+this.nom +" vous pouvez me contacter sur"+this.mail +" ou au "+this.telephone + "  ranting: " + this.mark+  "etoiles");
                }
            } 
        }
    }    
    Data.presentation();
}