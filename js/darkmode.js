let darkmode = document.getElementById("darkToggle");

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  if (darkmode.classList.contains("dark-mode")) {
    console.log("Switching to dark mode...");
    darkmode.style.background = "black";
    darkmode.style.color = "white";
  } else {
    darkmode.style.background = "white";
    darkmode.style.color = "black";
  }
}
