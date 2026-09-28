document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const togglePassword = document.getElementById("togglePassword");

  const toggleConfirmPassword = document.getElementById(
    "toggleConfirmPassword",
  );

  const signupMessage = document.getElementById("signupMessage");

  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
      }
    });
  }

  if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener("click", function () {
      if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        toggleConfirmPassword.textContent = "Hide";
      } else {
        confirmPasswordInput.type = "password";
        toggleConfirmPassword.textContent = "Show";
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (!name || !email || !password || !confirmPassword) {
        showMessage("Please fill in all fields.", "error");
        return;
      }

      if (name.length < 2) {
        showMessage("Please enter a valid name.", "error");
        return;
      }

      if (password.length < 6) {
        showMessage("Password must contain at least 6 characters.", "error");
        return;
      }

      if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "error");
        return;
      }

      const result = registerUser(name, email, password);

      if (!result.success) {
        showMessage(result.message, "error");
        return;
      }

      showMessage(
        "Account created successfully. Redirecting to login...",
        "success",
      );

      signupForm.reset();

      setTimeout(function () {
        window.location.href = "login.html";
      }, 800);
    });
  }

  function showMessage(message, type) {
    if (!signupMessage) {
      return;
    }

    signupMessage.textContent = message;
    signupMessage.className = "form-message " + type;
  }
});
