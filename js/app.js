// Dichiarazione variabili
const clock = setInterval( scadenza, 1000 );
let sec = 30;
const time = document.getElementById("time");
let endTime = false;
const text = document.getElementById("text");

// Funzioni
function scadenza(){ 
    sec -= 1;
    time.innerHTML = sec;

    if ( sec === 0 ){
        clearInterval( clock );
        text.innerHTML = "Inserisci tutti i numeri che ti ricordi (l'ordine non è importante)"
    }
}

// Script

