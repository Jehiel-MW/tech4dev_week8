function validateForm() {
  var firstName = document.getElementById("first-name");
  var middleName = document.getElementById("middle-name");
  var lastName = document.getElementById("last-name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");

  var isValid = true;

  // Validate first name
  if (firstName.value === "") {
    firstName.style.backgroundColor = "red";
    document.getElementById("first-name-error").innerHTML = "Please fill in the correct input.";
    isValid = false;
  } else {
    firstName.style.backgroundColor = "";
    document.getElementById("first-name-error").innerHTML = "";
  }

  // Validate last name
  if (lastName.value === "") {
    lastName.style.backgroundColor = "red";
    document.getElementById("last-name-error").innerHTML = "Please fill in the correct input.";
    isValid = false;
  } else {
    lastName.style.backgroundColor = "";
    document.getElementById("last-name-error").innerHTML = "";
  }

  // Validate email
  if (!isValidEmail(email.value)) {
    email.style.backgroundColor = "red";
    document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
    isValid = false;
  } else {
    email.style.backgroundColor = "";
    document.getElementById("email-error").innerHTML = "";
  }

  // Validate password
  if (password.value.length < 8 || !hasNumber(password.value) || !hasSpecialCharacter(password.value)) {
    password.style.backgroundColor = "red";
    document.getElementById("password-error").innerHTML = "Password must be at least 8 characters long, contain a number and a special character.";
    isValid = false;
  } else {
    password.style.backgroundColor = "";
    document.getElementById("password-error").innerHTML = "";
  }

  // Validate confirm password
  if (confirmPassword.value !== password.value) {
    confirmPassword.style.backgroundColor = "red";
    document.getElementById("confirm-password-error").innerHTML = "Passwords do not match.";
    isValid = false;
  } else {
    confirmPassword.style.backgroundColor = "";
    document.getElementById("confirm-password-error").innerHTML = "";
  }

  return isValid;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function hasNumber(string) {
  var numberRegex = /\d/;
  return numberRegex.test(string);
}

function hasSpecialCharacter(string) {
  var specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialCharacterRegex.test(string);
}
