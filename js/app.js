// Dichiarazione variabili
const clock = setInterval( scadenza, 1000 );
let sec = 30;
const time = document.getElementById("time");
const text = document.getElementById("text");
const blockNumeri = document.getElementById("numeri");
const blockForm = document.getElementById("form");
const button = document.getElementById("button");

// Funzioni
function scadenza(){ 
    sec -= 1;
    time.innerHTML = sec;

    if ( sec === 0 ){
        clearInterval( clock );
        text.innerHTML = "Inserisci tutti i numeri che ti ricordi (l'ordine non è importante)"
        blockNumeri.style.display = "none";
        blockForm.style.display = "block";
        button.style.display = "block";
    }
}

// Numeri
let savedNumber = [];
for ( let i = 0; i < 5; i++ ) {
    const num = document.getElementsByClassName("numero");
    num[i].innerHTML = parseInt( Math.random() * 50 + 1);
    savedNumber.push(num[i].innerHTML);
}

// Form
let foundNumber = [];
button.addEventListener('click',
    function () {
        for ( let i = 0; i < 5; i++ ) {
            const input = document.getElementsByClassName("input");
            if ( savedNumber.includes(input[i].value) ) {
                foundNumber.push(input[i]);
            }
            
        }
    }
    
)
