"use strict";

const inputElement = document.querySelector(".form__input-email");
const submitButton = document.querySelector(".form__input-submit");
const inputMessage = document.querySelector(".input-message");
const errorIcon = document.querySelector(".form__input-error");

const emailValidate = function (input) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (input.match(reg)) {
    inputMessage.innerHTML = "<span class='success-message'>Success</span>";
  } else {
    inputMessage.innerHTML =
      "<span class='error-message'>Please provide a valid email</span>";
    errorIcon.classList.add("active");
  }
};

submitButton.addEventListener("click", function () {
  errorIcon.classList.remove("active");
  let inputValue = inputElement.value;
  emailValidate(inputValue);
});
