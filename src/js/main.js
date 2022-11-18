"use strict";

// Get the elements for the question and the answers
let questionElement = document.getElementsByClassName("card-question__link");
let questionAnswerElement = document.getElementsByClassName("card-question__answer");
let questionChevron = document.getElementsByClassName("card-question__link-arrow");

// Add a click event listener to the question element
function questionEventListener() {
    for (let i = 0; i < 5;) {
        questionElement[i].addEventListener("click", questionToggle);
        i++;
    }
}

document.onload = questionEventListener();

/* Toggle the questions when clicked. If a question is showing and a different 
one is clicked, hide them all and then show the one that was just clicked */
function questionToggle(e) {
    if (e.target.nextElementSibling.style.display == "block") {
        e.target.nextElementSibling.style.display = "none";
        e.target.firstElementChild.style.transform = "unset"
        e.target.style.fontWeight = "400";
    } else {
        for (let i = 0; i < 5;) {
            questionAnswerElement[i].style.display = "none";
            questionChevron[i].style.transform = "unset";
            questionElement[i].style.fontWeight = "400";
            i++;
        }

        e.target.firstElementChild.style.transform = "rotateX(180deg)"
        e.target.nextElementSibling.style.display = "block";
        e.target.style.fontWeight = "700";
    }
}