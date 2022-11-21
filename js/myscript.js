console.log ("Ciao");

const nomeUtente = prompt("Inserie nome utente");

const cognomeUtente = prompt("Inserie cognome utente");

const colorePreferito = prompt("Inserie il colore preferito dell'utente");

const insecurePassword = nomeUtente + cognomeUtente + colorePreferito + 22;

console.log(insecurePassword);
document.getElementById('info').innerHTML = insecurePassword;