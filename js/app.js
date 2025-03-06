// Dichiarazione variabili
const clock = setInterval( scadenza, 1000 );
let sec = 30;
const time = document.getElementById("time");

// Funzioni
function scadenza(){ 
    sec -= 1;
    time.innerHTML = sec;

    if ( sec === 0 ){
        clearInterval( clock );
    }
}

// Script

