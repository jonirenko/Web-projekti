// Jesse Impiö

let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;

let tehtävänumero = 1;
document.getElementById("tehtävänumero").innerHTML = tehtävänumero;

// Asetetaan oikein, väärin ja oikein vastattujen tehtävien tekstit näkymättömiksi.
document.getElementById("oikein").style.display = "none";
document.getElementById("väärin").style.display = "none";
document.getElementById("oikeinVastattu").style.display = "none";

// Muuttuja oikeille vastauksille.
let oikeinVastattu = 0;
document.getElementById("oikeinVastattu").innerHTML = oikeinVastattu;

// Kohdistaa kursorin vastauskenttään.
document.getElementById("syöttökenttä").focus();

// Halutessaan aktivoi tarkistus -napin painamalla enteriä.
let syöttökenttä = document.getElementById("syöttökenttä");
syöttökenttä.addEventListener("keyup", function(enter) {
  if (enter.keyCode === 13) {
    enter.preventDefault();
    document.getElementById("tarkistus").click();
  }
});


// Funktio tarkistaa, onko annettu vastaus oikein. Mikäli vastaus on oikein asetetaan "oikeavastas-boxi" näkyviin ja lisätään tehtävä oikein vastatuksi. Vastauksen ollessa väärin, asetetaan "väärävastaus-boxi" näkyviin.
function tarkistus() {
    let oikeaVastaus = num1 + num2;
    let syöttökenttä = document.getElementById("syöttökenttä").value;

    if (syöttökenttä == oikeaVastaus) {
        document.getElementById("oikein").style.display = "block";
        document.getElementById("oikeinVastattu").innerHTML = oikeinVastattu += 1;
    } else {
        document.getElementById("vastaus").innerHTML = "Oikea vastaus on: " + oikeaVastaus;
        document.getElementById("väärin").style.display = "block";
    }

    document.getElementById("syöttökenttä").disabled = true;
}

// Funktio luo uuden laskutoimituksen ja tyhjentää vastauskentän. Samalla se asettaa "oikea- tai vääärävastaus-boxin" näkymättömäksi. Ja lisää tehtävänumeron. Jos käyttäjä on jo vastannut viiteen kysymykseen funktio piilottaa kaikki elementit ja näyttää suorituksen tuloksen.
function seuraava() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    document.getElementById("syöttökenttä").value = "";
    document.getElementById("oikein").style.display = "none";
    document.getElementById("väärin").style.display = "none";

    if (tehtävänumero < 5) {
        document.getElementById("tehtävänumero").innerHTML = tehtävänumero += 1;
    } else {
        document.getElementById("otsikko").style.display = "none"
        document.getElementById("kysymys").style.display = "none";
        document.getElementById("syöttökenttä").style.display = "none";
        document.getElementById("tarkistus").style.display = "none";
        document.getElementById("kysymysNumero").style.display = "none";
        document.getElementById("oikeinVastattu").style.display = "block";
    }

    document.getElementById("syöttökenttä").disabled = false;

    document.getElementById("syöttökenttä").focus();

    document.getElementById("oikeinVastattu").innerHTML = "Vastasit oikein " + oikeinVastattu + "/5 kysymyksistä.";
}