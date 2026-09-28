const USERS_KEY = "testlab_users";
const CURRENT_KEY = "testlab_current_user";

function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function registerUser(name, email, password) {
  const users = getUsers();

  const existingUser = users.find(function (user) {
    return user.email.toLowerCase() === email.toLowerCase();
  });

  if (existingUser) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  const newUser = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: password,
  };

  users.push(newUser);
  saveUsers(users);

  return {
    success: true,
    message: "Account created successfully.",
  };
}

function loginUser(email, password) {
  const users = getUsers();

  const user = users.find(function (item) {
    return (
      item.email.toLowerCase() === email.toLowerCase() &&
      item.password === password
    );
  });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  const currentUser = {
    name: user.name,
    email: user.email,
  };

  localStorage.setItem(CURRENT_KEY, JSON.stringify(currentUser));

  return {
    success: true,
    message: "Login successful.",
    user: currentUser,
  };
}

function getCurrentUser() {
  const user = localStorage.getItem(CURRENT_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch (error) {
    localStorage.removeItem(CURRENT_KEY);
    return null;
  }
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function logoutUser() {
  localStorage.removeItem(CURRENT_KEY);
}

function requireLogin() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
    return false;
  }

  return true;
}

function setupNavbarAuth() {
  const currentUser = getCurrentUser();

  const navLogin = document.getElementById("navLogin");
  const logoutBtn = document.getElementById("logoutBtn");
  const userProfile = document.getElementById("userProfile");
  const userNameNav = document.getElementById("userNameNav");
  const userAvatar = document.getElementById("userAvatar");

  if (currentUser) {
    if (navLogin) {
      navLogin.style.display = "none";
    }

    if (userProfile) {
      userProfile.style.display = "flex";
    }

    if (logoutBtn) {
      logoutBtn.style.display = "block";
    }

    if (userNameNav) {
      userNameNav.textContent = currentUser.name;
    }

    if (userAvatar) {
      userAvatar.textContent = currentUser.name
        ? currentUser.name.charAt(0).toUpperCase()
        : "U";
    }

    if (logoutBtn) {
      logoutBtn.onclick = function () {
        logoutUser();
        window.location.href = "index.html";
      };
    }
  } else {
    if (navLogin) {
      navLogin.style.display = "block";
    }

    if (userProfile) {
      userProfile.style.display = "none";
    }

    if (logoutBtn) {
      logoutBtn.style.display = "none";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupNavbarAuth();
});
