const wasteData = {
  phone: {
    type: "📱 Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers or drop-off points. Never throw electronics in trash!",
    upcycle: "Turn old phones into security cams or music players with free apps like AlfredCamera.",
    toxic: "Electronics contain mercury, lead, and cadmium — very harmful to soil and water.",
    score: "Saving 1 phone = Preventing 55kg of CO₂ emissions!"
  },
  bottle: {
    type: "🥤 Plastic Waste (e.g., Bottle)",
    dispose: "Rinse and place in a plastic recycling bin. Avoid landfill disposal.",
    upcycle: "Cut bottles into planters or DIY lamps. Great for balcony gardening.",
    toxic: "Plastic leaches BPA and microplastics into water and soil — affects health.",
    score: "1 recycled bottle = 85% less energy than making a new one."
  },
  banana: {
    type: "🍌 Organic Waste (e.g., Banana Peel)",
    dispose: "Compost at home or drop in green waste bins. Avoid plastic bags.",
    upcycle: "Make banana peel fertilizer or polish silverware naturally!",
    toxic: "Organic waste emits methane in landfills — 30x worse than CO₂!",
    score: "Composting 1 peel = Saving 0.5 kg of CO₂ and soil enrichment."
  }
};

document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const fileName = file.name.toLowerCase();
  let type = 'phone';
  if (fileName.includes("banana")) type = 'banana';
  else if (fileName.includes("bottle")) type = 'bottle';

  const data = wasteData[type];
  document.getElementById("wasteType").innerText = data.type;
  document.querySelector("#disposeCard p").innerText = data.dispose;
  document.querySelector("#upcycleCard p").innerText = data.upcycle;
  document.querySelector("#toxicCard p").innerText = data.toxic;
  document.querySelector("#scoreCard p").innerText = data.score;

  document.getElementById("resultBox").style.display = "block";
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions, eco-points, upcycling ideas & nearby bins!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Map view with certified recycling and composting centers near you!");
};
