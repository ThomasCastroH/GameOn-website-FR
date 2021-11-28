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
const formData = document.querySelectorAll(".formData");

// Inputs
const form = document.getElementById('form');
const firstnameInput = document.getElementById('first');
const lastnameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const quantityInput = document.getElementById('quantity');
const conditionsInput = document.getElementById('checkbox1');
const citiesInput = document.querySelectorAll('[name="location"]');

const btnThanks = document.getElementById("btn-thanks");
const thanksForm = document.querySelector(".modal-thanks");

// Regex
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const nameRegex = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
const integerRegex = /^[0-9]\d*$/;

// Eventslisteners for all inputs
firstnameInput.addEventListener("change", isFirstnameValid);
lastnameInput.addEventListener("change", isLastnameValid);
emailInput.addEventListener("change", isEmailValid);
birthdateInput.addEventListener("change", isBirthdateValid);
quantityInput.addEventListener("change", isQuantityValid);
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
  if (nameRegex.test(firstnameInput.value)) {
    firstnameInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    firstnameInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if lastname is valid
function isLastnameValid() {
  if (nameRegex.test(lastnameInput.value)) {
    lastnameInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    lastnameInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if email adress is valid
function isEmailValid() {
  if (emailRegex.test(emailInput.value)) {
    emailInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    emailInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if birthdate is valid
function isBirthdateValid() {
  if (birthdateInput.value !== "") {
    birthdateInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    birthdateInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if number of tournament played is valid
function isQuantityValid() {
  if (integerRegex.test(quantityInput.value)) {
    quantityInput.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    quantityInput.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

// check if a city checkbox has been checked
function isCityValid() {
  for (var city of citiesInput) {
      if (city.checked) {
        city.parentElement.setAttribute("data-error-visible", "false");
        return true;
      } else {
        city.parentElement.setAttribute("data-error-visible", "true");
      }
    }
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

// check if all the form is valid
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (isFirstnameValid() && isLastnameValid() && isEmailValid() && isBirthdateValid() && isQuantityValid() && isCityValid() && isConditionsValid()) {
    form.style.display = "none";
    thanksForm.style.display = "flex";
  } else {
    isFirstnameValid();
    isLastnameValid();
    isEmailValid();
    isBirthdateValid();
    isQuantityValid();
    isCityValid();
    isConditionsValid();
  }
});