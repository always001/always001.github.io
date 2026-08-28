function applyTheme(){
  const theme = localStorage.getItem("theme") || "light";
  document.body.classList.remove("light","dark");
  document.body.classList.add(theme);
}

function toggleTheme(){
  const current = localStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("theme", next);
  applyTheme();
}

applyTheme();
