const wasteData = {
  plastic: {
    type: "📦 Plastic Waste (e.g., Bottle)",
    dispose: "Clean and sort plastics. Drop at local plastic collection bins or recycling centers.",
    upcycle: "Turn bottles into planters, organizers, or lamps!",
    toxic: "Plastics leach microplastics into soil/water, harming animals and humans.",
    score: "Recycling 1 plastic bottle saves enough energy to light a 60W bulb for 6 hours!"
  },
  ewaste: {
    type: "📱 Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers. Never trash electronics!",
    upcycle: "Convert old phones to security cams or media players.",
    toxic: "Electronics contain mercury and lead — toxic to soil and water.",
    score: "Saving 1 phone = prevents 55kg CO₂ emissions!"
  },
  organic: {
    type: "🍌 Organic Waste (e.g., Banana Peel)",
    dispose: "Compost at home or use municipal compost bins.",
    upcycle: "Use peels as natural fertilizer or for DIY face masks!",
    toxic: "If not composted, organics create methane in landfills.",
    score: "Composting 1kg organic waste = removes ~0.25kg methane!"
  }
};

document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const fileName = file.name.toLowerCase();
  let category = "ewaste";

  if (fileName.includes("plastic")) category = "plastic";
  else if (fileName.includes("banana") || fileName.includes("organic")) category = "organic";

  const data = wasteData[category];
  document.getElementById("wasteType").innerText = data.type;
  document.getElementById("disposeText").innerText = data.dispose;
  document.getElementById("upcycleText").innerText = data.upcycle;
  document.getElementById("toxicText").innerText = data.toxic;
  document.getElementById("ecoScoreText").innerText = data.score;

  document.getElementById("wasteInfo").classList.remove("hidden");
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: AI-powered recycling suggestions, eco-points, and tips!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Map with nearest recycling & composting bins!");
};
