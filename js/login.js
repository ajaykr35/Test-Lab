document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const loginMessage = document.getElementById("loginMessage");

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

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value;

      if (!email || !password) {
        showMessage("Please enter your email and password.", "error");
        return;
      }

      const result = loginUser(email, password);

      if (!result.success) {
        showMessage(result.message, "error");
        return;
      }

      showMessage("Login successful. Redirecting...", "success");

      setTimeout(function () {
        window.location.href = "index.html";
      }, 500);
    });
  }

  function showMessage(message, type) {
    if (!loginMessage) {
      return;
    }

    loginMessage.textContent = message;
    loginMessage.className = "form-message " + type;
  }
});
