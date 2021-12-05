function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");

// Inputs
const form = document.getElementById('form');
const inputIn = document.querySelectorAll('.text-control');
const conditionsInput = document.getElementById('checkbox1');
const citiesInput = document.querySelectorAll('[name="location"]');
const btnThanks = document.getElementById("btn-thanks");
const thanksForm = document.querySelector(".modal-thanks");

// Regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const integerRegex = /^[0-9]\d*$/;

// Eventslisteners for all inputs
inputIn[0].addEventListener("change", isFirstnameValid);
inputIn[1].addEventListener("change", isLastnameValid);
inputIn[2].addEventListener("change", isEmailValid);
inputIn[3].addEventListener("change", isBirthdateValid);
inputIn[4].addEventListener("change", isQuantityValid);
citiesInput.forEach((check) => {
  check.addEventListener("click", isCityValid);
});
conditionsInput.addEventListener("change", isConditionsValid);

// Modal
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// close thanks modal
btnThanks.addEventListener("click", closeModal);

// Functions
// check if firstname is valid
function isFirstnameValid() {
  if (nameRegex.test(inputIn[0].value)) {
    inputIn[0].parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    inputIn[0].parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if lastname is valid
function isLastnameValid() {
  if (nameRegex.test(inputIn[1].value)) {
    inputIn[1].parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    inputIn[1].parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if email adress is valid
function isEmailValid() {
  if (emailRegex.test(inputIn[2].value)) {
    inputIn[2].parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    inputIn[2].parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if birthdate is valid
function isBirthdateValid() {
  if (inputIn[3].value !== "") {
    inputIn[3].parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    inputIn[3].parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if number of tournament played is valid
function isQuantityValid() {
  if (integerRegex.test(inputIn[4].value)) {
    inputIn[4].parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    inputIn[4].parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if a city checkbox has been checked
function isCityValid() {
  for (var city of citiesInput) {
      if (city.checked) {
        city.parentElement.setAttribute("data-error-visible", "false");
        return true;
      }
    }
    city.parentElement.setAttribute("data-error-visible", "true");
    return false; 
}

// check if the conditions checkbox has been checked
function isConditionsValid() {
  if (conditionsInput.checked) {
    conditionsInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  }
  else {
    conditionsInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// submit form
function submitForm() {
  form.submit();
}

// check if all the form is valid
function isFormValid(e) {
  e.preventDefault();
  if (isFirstnameValid() && isLastnameValid() && isEmailValid() && isBirthdateValid() && isQuantityValid() && isCityValid() && isConditionsValid()) {
    form.style.display = "none";
    thanksForm.style.display = "flex";
    setTimeout(submitForm, 2000);
  } else {
    isFirstnameValid();
    isLastnameValid();
    isEmailValid();
    isBirthdateValid();
    isQuantityValid();
    isCityValid();
    isConditionsValid();
  }
}

// validation event
form.addEventListener("submit", isFormValid);