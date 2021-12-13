
let question1 = document.getElementById("question1");

const RIGHT = "Oikein!";
const WRONG = "Väärin!";
const TRICK = "Oikein! Kysymys on kompa; mikään näistä ei ole Yhdysvaltain osavaltio.";

document.querySelector("#quest1").addEventListener("click", checkAnwer);

function checkAnwer() {
    let choice = document.getElementsByClassName("right");
    let answerField = document.createElement("div");
    if (choice.checked === true) {
        answerField.appendChild(RIGHT);
        question1.append(answerField);
    }
}