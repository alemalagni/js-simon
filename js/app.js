// Dichiarazione variabili
const clock = setInterval( scadenza, 1000 );
let sec = 30;
const time = document.getElementById("time");
const text = document.getElementById("text");
const button = document.getElementById("button");

// Funzioni
function scadenza(){ 
    sec -= 1;
    time.innerHTML = sec;

    if ( sec === 0 ){
        const blockNumeri = document.getElementById("numeri");
        const blockForm = document.getElementById("form");

        clearInterval( clock );
        text.innerHTML = "Inserisci tutti i numeri che ti ricordi (l'ordine non è importante)"
        blockNumeri.style.display = "none";
        blockForm.style.display = "flex";
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
button.addEventListener('click',
    function () {
        let foundNumber = [];
        let errore = false;

        for ( let i = 0; i < 5; i++ ) {
            const input = document.getElementsByClassName("input");
            const warning = document.getElementById("warning");

            if ( savedNumber.includes(input[i].value) ) {
                foundNumber.push(input[i].value);
            } else if ( input[i].value < 0 || input[i].value > 50) {
                
            }
            
            if ( errore ) {
                warning.style.display = "block";
                warning.style.color = "red";
                warning.innerHTML = `I numeri da indovinare sono tra 0 e 50`;
            } else {
                warning.style.display = "block";
                warning.style.color = "green";
                warning.innerHTML = `Hai indovinato ${foundNumber.length} numeri! (${foundNumber})`;
            }
        }
    }
)
