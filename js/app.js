// Dichiarazione variabili
const clock = setInterval( scadenza, 1000 );
let sec = 30;

// Funzioni
function scadenza(){ 
    sec -= 1;
    console.log(sec)

    if ( sec === 0 ){
        clearInterval( clock );
    }
}

// Script

