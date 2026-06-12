const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const login = document.getElementById("login");
const signup = document.getElementById("signup");

const params = new URLSearchParams(window.location.search);
const formParam = params.get("form");

if (formParam) {
  sessionStorage.setItem("activeForm", formParam);
}

let activeForm;

if (sessionStorage.getItem("activeForm") !== null) {
  activeForm = sessionStorage.getItem("activeForm");
} else {
  activeForm = "signup";
}

if (activeForm === "login") {
  login.style.display = "block";
  signup.style.display = "none";
} else {
  signup.style.display = "block";
  login.style.display = "none";
}

window.history.replaceState({}, document.title, window.location.pathname);

const errorMessages = document.querySelectorAll(".form-message");

signUpButton.addEventListener("click", () => {
  login.style.display = "none";
  signup.style.display = "block";
  sessionStorage.setItem("activeForm", "signup");
  errorMessages.forEach((msg) => (msg.style.display = "none"));
});

signInButton.addEventListener("click", () => {
  signup.style.display = "none";
  login.style.display = "block";
  sessionStorage.setItem("activeForm", "login");
  errorMessages.forEach((msg) => (msg.style.display = "none"));
});
