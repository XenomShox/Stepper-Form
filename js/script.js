const fieldsets = document.querySelectorAll("fieldset");
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#pass");
const textErrors = document.querySelectorAll("p.error-text");
const hrs = document.querySelectorAll("hr.hr");
const stepsNum = document.querySelectorAll(".step div");

const buttons = document.querySelectorAll("input[type=button]");
console.log(hrs);

// Manipulating the DOM
init_HTML();
buttons[0].addEventListener("click", goToSecondStep);
buttons[1].addEventListener("click", goBackToFirstStep);
buttons[2].addEventListener("click", goToThirdStep);
buttons[3].addEventListener("click", goBackToSecondStep);

// Functions
function init_HTML() {
    fieldsets.forEach((field, idx) => {
        idx !== 0 ? field.classList.add("no-display") : null;
    });
}

function goToSecondStep() {
    if (emailInput.checkValidity()) {
        textErrors[0].innerHTML = "";

        // Change step display
        fieldsets[0].classList.add("no-display");
        fieldsets[1].classList.remove("no-display");

        // Change Hr and step number display
        hrs[0].classList.remove("not-current-step-bg-hr");
        hrs[0].classList.add("current-step-bg");

        stepsNum[1].classList.remove("not-current-step-bg-hr");
        stepsNum[1].classList.add("current-step-bg");
    } else {
        textErrors[0].innerHTML = "Please type a valid Email";
    }
}
function goToThirdStep() {
    if (passInput.checkValidity()) {
        textErrors[0].innerHTML = "";

        // Change step display
        fieldsets[1].classList.add("no-display");
        fieldsets[2].classList.remove("no-display");

        // Change Hr and step number display
        hrs[1].classList.remove("not-current-step-bg-hr");
        hrs[1].classList.add("current-step-bg");

        stepsNum[2].classList.remove("not-current-step-bg-hr");
        stepsNum[2].classList.add("current-step-bg");
    } else {
        textErrors[1].innerHTML = "INVALID PASS, LOCK THE BUILDING";
    }
}

function goBackToSecondStep() {
    // Change the fieldset
    fieldsets[2].classList.add("no-display");
    fieldsets[1].classList.remove("no-display");

    // Change Hr and step number display
    hrs[1].classList.remove("current-step-bg");
    hrs[1].classList.add("not-current-step-bg-hr");

    stepsNum[2].classList.remove("current-step-bg");
    stepsNum[2].classList.add("not-current-step-bg-hr");
}
function goBackToFirstStep() {
    // Change the fieldset
    fieldsets[1].classList.add("no-display");
    fieldsets[0].classList.remove("no-display");

    // Change Hr and step number display
    hrs[0].classList.remove("current-step-bg");
    hrs[0].classList.add("not-current-step-bg-hr");

    stepsNum[1].classList.remove("current-step-bg");
    stepsNum[1].classList.add("not-current-step-bg-hr");
}
