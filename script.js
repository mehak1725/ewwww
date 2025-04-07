document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  document.getElementById("result").innerHTML = `
    📱 Waste Type: Electronic Waste (e.g., Phone)<br/>
    ♻️ Decomposition Time: 1 million years<br/>
    ✅ Suggestion: Recycle via certified e-waste centers.<br/>
    🌱 Eco Tip: Never throw electronics in the trash — they leak toxic chemicals!
  `;

  document.getElementById("resultPage1").classList.remove("hidden");
  document.getElementById("resultPage2").classList.add("hidden");
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Personalized eco suggestions!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Find nearby recycle bins!");
};

// Multi-page logic
document.querySelector(".nextBtn").onclick = () => {
  document.getElementById("resultPage1").classList.add("hidden");
  document.getElementById("resultPage2").classList.remove("hidden");
};

document.querySelector(".backBtn").onclick = () => {
  document.getElementById("resultPage2").classList.add("hidden");
  document.getElementById("resultPage1").classList.remove("hidden");
};
