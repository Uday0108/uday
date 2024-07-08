var typed  = new Typed(".auto-type",{
    strings : ["programmer...","designer...","developer..."],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
    })

let count = 1 ;
function darkMode(){
    count++;
    if(count%2==0){
    document.body.style.backgroundColor = 'Black' ; 
    document.getElementById('udayKumar').style.color  = 'white';
    document.getElementById('con1').style.color  = 'white';
    document.getElementById('con2').style.color  = 'white';
    document.getElementById('con3').style.color  = 'white';
    document.getElementById('con4').style.color  = 'white';
    document.getElementById('con5').style.color  = 'white';
    document.getElementById('con6').style.color  = 'white';
    document.getElementById('con7').style.color  = 'white';
    document.getElementById('con8').style.color  = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white' ; 
        document.getElementById('udayKumar').style.color  = 'Black';
        document.getElementById('con1').style.color  = 'Black';
        document.getElementById('con2').style.color  = 'Black';
        document.getElementById('con3').style.color  = 'Black';
        document.getElementById('con4').style.color  = 'Black';
        document.getElementById('con5').style.color  = 'Black';
        document.getElementById('con6').style.color  = 'Black';
        document.getElementById('con7').style.color  = 'Black';
        document.getElementById('con8').style.color  = 'Black';
        document.getElementById('mode').style.backgroundColor = '';
    }  
}
