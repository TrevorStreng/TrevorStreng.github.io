const container = document.querySelector('.container')
const toggleBtn = document.getElementById("toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  document.body.classList.add("dark-mode-theme");
  container.classList.add("dark-mode-container");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-mode-theme");
  container.classList.remove("dark-mode-container");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});