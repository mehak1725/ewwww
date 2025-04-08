const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");
let currentWasteType = '';

document.getElementById("imageInput").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      document.getElementById("previewImage").src = event.target.result;
      simulateDetection(); // Mock AI detection
    };
    reader.readAsDataURL(file);
  }
});

function simulateDetection() {
  const types = ["plastic", "ewaste", "organic"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  currentWasteType = randomType;

  const wasteMap = {
    plastic: "🧴 Plastic Waste (e.g., Bottle)",
    ewaste: "📱 Electronic Waste (e.g., Phone)",
    organic: "🍌 Organic Waste (e.g., Banana Peel)",
  };

  document.getElementById("wasteType").innerText = wasteMap[randomType];
}

const wasteDetails = {
  plastic: {
    dispose: "Rinse and place in plastic recycling bins. Avoid burning. Recycle codes 1 & 2 are most accepted.",
    upcycle: "Turn into planters, organizers, eco-bricks, or creative art with kids.",
    toxic: "Releases microplastics that harm marine life. Burning produces toxic fumes.",
    eco: "Recycling one bottle saves enough energy to power a lightbulb for 3 hours and reduces landfill overflow."
  },
  ewaste: {
    dispose: "Drop off at certified e-waste centers. Never toss in regular bins. Check city waste programs.",
    upcycle: "Old phones = security cams or music players. Use apps like AlfredCamera or Kodi.",
    toxic: "Contains lead, mercury, and cadmium — harmful to soil, water, and health if dumped improperly.",
    eco: "Recycling one phone prevents 55kg of CO₂ emissions and reduces demand for raw minerals."
  },
  organic: {
    dispose: "Compost at home or use local composting bins. Ideal for gardens and city composting drives.",
    upcycle: "Use peels for leaf shine, DIY natural cleaners, or to enrich your soil.",
    toxic: "Can attract pests and release methane in landfills if not composted properly.",
    eco: "Composting reduces methane (a greenhouse gas) and creates nutrient-rich soil."
  }
};

function showPopup(type) {
  if (!currentWasteType) return alert("Please scan a waste image first!");
  popupContent.innerText = wasteDetails[currentWasteType][type];
  popup.classList.add("show");
}

function closePopup() {
  popup.classList.remove("show");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showEcoSuggestions() {
  alert("🌱 Tip: Bring your own reusable bag, bottle, or straw to avoid plastic!");
}

function showBinLocations() {
  alert("📍 Try searching 'Recycle bins near me' on Google Maps for accurate bin locations.");
}
