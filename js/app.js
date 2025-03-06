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

// Numeri
let savedNumber = [];
for ( let i = 0; i < 5; i++ ) {
    const num = document.getElementsByClassName("numero");
    num[i].innerHTML = parseInt( Math.random() * 50 + 1);
    savedNumber.push(num[i]);
}

