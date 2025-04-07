document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  document.getElementById("result").innerHTML = `
    📱 <b>Waste Type:</b> Electronic Waste (e.g., Phone)<br>
    ♻️ <b>Decomposition Time:</b> 1 million years<br>
    ✅ <b>Suggestion:</b> Recycle via certified e-waste centers.<br>
    🌱 <b>Eco Tip:</b> Never throw electronics in the trash — they leak toxic chemicals!
  `;

  document.getElementById("moreInfo").classList.remove("hidden");
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Eco Suggestions based on scanned item!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Locate nearby recycling bins!");
};
