// ---------------------------
// Part 1: Event Handling Demo
// ---------------------------
document.getElementById("messageBtn").addEventListener("click", function() {
  document.getElementById("messageArea").textContent = "🎉 Button was clicked!";
});

// ---------------------------
// Part 2: Interactive Elements
// ---------------------------

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let counter = 0;
document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counter").textContent = counter;
});
document.getElementById("resetBtn").addEventListener("click", function() {
  counter = 0;
  document.getElementById("counter").textContent = counter;
});

// Collapsible FAQ
document.getElementById("faqQuestion").addEventListener("click", function() {
  const answer = document.getElementById("faqAnswer");
  answer.classList.toggle("hidden");
});

// ---------------------------
// Part 3: Form Validation
// ---------------------------
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  // Validate name
  if (name === "") {
    nameError.textContent = "Name cannot be empty.";
    isValid = false;
  }

  // Validate email with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate password (at least 6 chars)
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Success
  if (isValid) {
    formSuccess.textContent = "✅ Registration successful!";
    document.getElementById("registerForm").reset();
  }
});
