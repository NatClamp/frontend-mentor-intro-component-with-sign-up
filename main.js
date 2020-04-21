var form = document.querySelector('.form');
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var emailInput = document.getElementById('email-address');
var passwordInput = document.getElementById('password');
var firstNameErrorIcon = document.getElementById('first-name-error-icon')
var lastNameErrorIcon = document.getElementById('last-name-error-icon')
var emailAddressErrorIcon = document.getElementById('email-error-icon')
var passwordErrorIcon = document.getElementById('password-error-icon')
var firstNameEmptyErrorMessage = document.getElementById('first-name-empty-error-message')
var lastNameEmptyErrorMessage = document.getElementById('last-name-empty-error-message')
var emailAddressEmptyErrorMessage = document.getElementById('email-address-empty-error-message')
var emailAddressInvalidErrorMessage = document.getElementById('email-address-invalid-error-message')
var passwordEmptyErrorMessage = document.getElementById('password-empty-error-message')

function checkIfInputEmpty(inputElement, iconElement, messageElement) {
  if (inputElement.value === '') {
    iconElement.classList.remove('hidden');
    messageElement.classList.remove('hidden');
    inputElement.classList.add('input--error');
    inputElement.classList.add('input--error');
  } else {
    console.log(!messageElement.classList.contains('hidden'))
    if (!iconElement.classList.contains('hidden')) iconElement.classList.add('hidden');
    if (!messageElement.classList.contains('hidden')) messageElement.classList.add('hidden');
    if (inputElement.classList.contains('input--error')) inputElement.classList.remove('input--error');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkIfInputEmpty(firstNameInput, firstNameErrorIcon, firstNameEmptyErrorMessage)
  checkIfInputEmpty(lastNameInput, lastNameErrorIcon, lastNameEmptyErrorMessage)
  checkIfInputEmpty(emailInput, emailAddressErrorIcon, emailAddressEmptyErrorMessage)
  checkIfInputEmpty(passwordInput, passwordErrorIcon, passwordEmptyErrorMessage)

  if (emailInput.value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    emailAddressErrorIcon.classList.remove('hidden');
    emailAddressInvalidErrorMessage.classList.remove('hidden');
    emailInput.classList.add('input--error');
  } else if (emailInput.value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
    if (!emailAddressErrorIcon.classList.contains('hidden')) emailAddressErrorIcon.classList.add('hidden');
    if (!emailAddressInvalidErrorMessage.classList.contains('hidden')) emailAddressInvalidErrorMessage.classList.add('hidden');
    if (emailInput.classList.contains('input--error')) emailInput.classList.remove('input--error');
  }


});