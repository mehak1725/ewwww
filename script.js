document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  // Mocked AI: Detect waste type based on filename
  const fileName = file.name.toLowerCase();
  let wasteType = "e-waste";
  if (fileName.includes("plastic")) wasteType = "plastic";
  else if (fileName.includes("banana") || fileName.includes("organic")) wasteType = "organic";

  showResult(wasteType);
};

function showResult(type) {
  let html = "";

  if (type === "plastic") {
    html = `
      <div class="card"><strong>🧴 Plastic Waste</strong><br>Single-use plastics like bottles, bags, wrappers.</div>
      <div class="card">♻️ <strong>How to Dispose:</strong><br>Clean & sort plastics. Recycle at drop-off points or bins.</div>
      <div class="card">🎨 <strong>Upcycling Idea:</strong><br>Turn bottles into planters, lights, or storage!</div>
      <div class="card">☠️ <strong>Toxic Alert:</strong><br>Plastics pollute oceans, harm animals, and don't decompose!</div>
      <div class="card">⭐ <strong>Eco Score:</strong><br>Saving 1kg of plastic = saves 3.8L of oil & 1.5kg CO₂</div>
    `;
  } else if (type === "organic") {
    html = `
      <div class="card"><strong>🍌 Organic Waste</strong><br>Food scraps, fruit peels, garden waste.</div>
      <div class="card">♻️ <strong>How to Dispose:</strong><br>Compost in home bins or municipal compost programs.</div>
      <div class="card">🎨 <strong>Upcycling Idea:</strong><br>Make DIY compost, use banana peels as fertilizer!</div>
      <div class="card">☠️ <strong>Toxic Alert:</strong><br>Rotting waste releases methane if landfilled!</div>
      <div class="card">⭐ <strong>Eco Score:</strong><br>Composting 1kg food waste = reduces 0.9kg CO₂</div>
    `;
  } else {
    html = `
      <div class="card"><strong>📱 Electronic Waste</strong><br>Phones, gadgets, cables, chargers.</div>
      <div class="card">♻️ <strong>How to Dispose:</strong><br>Drop at certified e-waste centers. Never trash electronics!</div>
      <div class="card">🎨 <strong>Upcycling Idea:</strong><br>Convert old phones to security cams or media players.</div>
      <div class="card">☠️ <strong>Toxic Alert:</strong><br>Electronics contain mercury, lead — toxic to soil & water.</div>
      <div class="card">⭐ <strong>Eco Score:</strong><br>Saving 1 phone = prevents 55kg CO₂ emissions!</div>
    `;
  }

  document.getElementById("result").innerHTML = html;
}

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions, eco-points & upcycling ideas!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Nearby recycle bin locator with GPS map!");
};
