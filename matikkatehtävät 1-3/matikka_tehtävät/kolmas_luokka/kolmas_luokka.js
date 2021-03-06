//Jesse Impiö

//muuttujat
let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);
let num3 = Math.floor(Math.random() * 11);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

let tehtävänumero = 1;
document.getElementById("tehtävänumero").innerHTML = tehtävänumero;

//asetetaan oikein, väärin ja oikein vastattujen tehtävien tekstit näkymättömiksi
document.getElementById("oikein").style.display = "none";
document.getElementById("väärin").style.display = "none";
document.getElementById("oikeinVastattu").style.display = "none";

//muuttuja oikeille vastauksille
let oikeinVastattu = 0;
document.getElementById("oikeinVastattu").innerHTML = oikeinVastattu;

//kohdistetaan kursori vastauskenttään
document.getElementById("syöttökenttä").focus();

//halutessaan voi aktivoida tarkistus -napin painamalla enteriä
let syöttökenttä = document.getElementById("syöttökenttä");
syöttökenttä.addEventListener("keyup", function(enter) {
  if (enter.keyCode === 13) {
    enter.preventDefault();
    document.getElementById("tarkistus").click();
  }
});

//funktio tehtävien tarkistusta varten
function tarkistus() {
    let oikeaVastaus = num1 + num2 * num3;
    let syöttökenttä = document.getElementById("syöttökenttä").value;

    //jos vastaus on oikein asetetaan "oikeavastas-boxi" näkyviin ja lisätään oikein vastattu tehtävä
    //jos ehto ei täyty, asetetaan "väärävastaus-boxi" näkyviin
    if (syöttökenttä == oikeaVastaus) {
        document.getElementById("oikein").style.display = "block";
        document.getElementById("oikeinVastattu").innerHTML = oikeinVastattu += 1;
    } else {
        document.getElementById("vastaus").innerHTML = "Oikea vastaus on: " + oikeaVastaus;
        document.getElementById("väärin").style.display = "block";
    }

    //suljetaan syöttökenttä käyttäjältä
    document.getElementById("syöttökenttä").disabled = true;
}

//seuraava -nappia painettaessa luodaan uusi laskutoimitus ja tyhjennetään vastauskenttä
//asetetaan "oikea- tai väärävastaus-boxi" näkymättömäksi
function seuraava() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    num3 = Math.floor(Math.random() * 11);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
    document.getElementById("num3").innerHTML = num3;

    document.getElementById("syöttökenttä").value = "";
    document.getElementById("oikein").style.display = "none";
    document.getElementById("väärin").style.display = "none";

    //lisätään tehtävänumero
    //mikäli tehtäviä on tehty jo viisi seuraava -nappi piilottaa kikki elementit ja näyttää suorituksen tuloksen
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

    //avataan syöttökenttä käyttäjälle
    document.getElementById("syöttökenttä").disabled = false;

    //kohdistetaan kursori vastauskenttään
    document.getElementById("syöttökenttä").focus();

    //suorituksen tulos
    document.getElementById("oikeinVastattu").innerHTML = "Vastasit oikein " + oikeinVastattu + "/5 kysymyksistä.";
}