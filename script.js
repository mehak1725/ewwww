const wasteDatabase = {
  plastic: {
    type: "Plastic Waste (e.g., Bottle)",
    dispose: "Clean and drop in plastic recycling bins. Avoid mixing with organic waste.",
    upcycle: "Turn plastic bottles into planters, organizers, or DIY crafts.",
    toxic: "Takes 500+ years to degrade. Breaks into microplastics harming marine life.",
    eco: "Recycling 1 bottle saves enough energy to power a light bulb for 3 hours."
  },
  electronic: {
    type: "Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers. Never trash electronics!",
    upcycle: "Convert old phones to security cams or media players.",
    toxic: "Electronics contain mercury and lead — toxic to soil and water.",
    eco: "Saving 1 phone = prevents 55kg CO₂ emissions!"
  },
  organic: {
    type: "Organic Waste (e.g., Food Scraps)",
    dispose: "Compost at home or use city compost bins. Avoid plastic contamination.",
    upcycle: "Use banana peels to polish leather or make compost tea.",
    toxic: "When dumped in landfill, creates methane — a powerful greenhouse gas.",
    eco: "Composting reduces methane and returns nutrients to soil."
  }
};

// Simulated label detection (mock)
function getMockLabel(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes("plastic")) return "plastic";
  if (lower.includes("food") || lower.includes("banana") || lower.includes("organic")) return "organic";
  if (lower.includes("phone") || lower.includes("electronic") || lower.includes("laptop")) return "electronic";
  return "plastic"; // default
}

document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const label = getMockLabel(file.name);
  const data = wasteDatabase[label];

  document.getElementById("resultSection").classList.remove("hidden");
  document.getElementById("wasteType").innerText = `📦 ${data.type}`;
  document.getElementById("disposeInfo").innerText = data.dispose;
  document.getElementById("upcycleInfo").innerText = data.upcycle;
  document.getElementById("toxicInfo").innerText = data.toxic;
  document.getElementById("ecoInfo").innerText = data.eco;
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Eco Tips: Try composting, say no to plastic, and recycle mindfully!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Smart bin locator based on your city & zip code!");
};
