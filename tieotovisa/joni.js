let rightCounter = 0;

const RIGHT = "Oikein!";
const WRONG = "Väärin!";
const TRICK = "Oikein! Kysymys on kompa; mikään näistä ei ole Yhdysvaltain osavaltio.";

document.querySelector("#check-answers").addEventListener("click", checkAnwers);

function checkAnwers() {
    rightCounter = 0;
    question1();
    question2();
    question3();
    question4();
    question5();
    let rightTotal = "Vastasit oikein " + rightCounter + "/5 kysymyksestä."
    document.getElementById("total").innerHTML = rightTotal;
}

function question1() {
    let choice = document.getElementById("right1");
    let answerField = document.getElementById("question-1-answer");
    document.getElementById("question-1-answer").innerHTML = "";
    answerField.classList.remove("incorrect");
    if (choice.checked === true) {
        answerField.innerHTML = RIGHT;
        answerField.classList.add("correct");
        rightCounter++;
    } else {
        answerField.innerHTML = WRONG;
        answerField.classList.add("incorrect");
    }
}

function question2() {
    let choice = document.getElementById("right2");
    let answerField = document.getElementById("question-2-answer");
    document.getElementById("question-2-answer").innerHTML = "";
    answerField.classList.remove("incorrect");
    if (choice.checked === true) {
        answerField.innerHTML = RIGHT;
        answerField.classList.add("correct");
        rightCounter++;
    } else {
        answerField.innerHTML = WRONG;
        answerField.classList.add("incorrect");
    }
}

function question3() {
    let choice = document.getElementById("right3");
    let answerField = document.getElementById("question-3-answer");
    document.getElementById("question-3-answer").innerHTML = "";
    answerField.classList.remove("incorrect");
    if (choice.checked === true) {
        answerField.innerHTML = RIGHT;
        answerField.classList.add("correct");
        rightCounter++;
    } else {
        answerField.innerHTML = WRONG;
        answerField.classList.add("incorrect");
    }
}

function question4() {
    let choice = document.getElementById("right4");
    let answerField = document.getElementById("question-4-answer");
    document.getElementById("question-4-answer").innerHTML = "";
    answerField.classList.remove("incorrect");
    if (choice.checked === true) {
        answerField.innerHTML = RIGHT;
        answerField.classList.add("correct");
        rightCounter++;
    } else {
        answerField.innerHTML = WRONG;
        answerField.classList.add("incorrect");
    }
}

function question5() {
    let answerField = document.getElementById("question-5-answer");
    let choice = document.getElementsByName("selected-5");
    if (choice.checked = true) {
        answerField.innerHTML = TRICK;
        answerField.classList.add("correct");
        rightCounter++;
    } else {
        answerField.innerHTML = WRONG;
        answerField.classList.add("incorrect");
    }
}