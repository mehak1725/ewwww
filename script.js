document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  const banana = document.getElementById("banana");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  banana.style.display = "block";

  const fileName = file.name.toLowerCase();

  let wasteType = "Unknown";
  let dispose = "", upcycle = "", toxic = "", score = "";

  if (fileName.includes("plastic")) {
    wasteType = "Plastic Waste (e.g., Bottle)";
    dispose = "Use local plastic recycling bins or collection points.";
    upcycle = "Turn plastic bottles into planters or organizers!";
    toxic = "Plastic breaks into microplastics, harming ocean life.";
    score = "Recycling 1 bottle saves energy for 3 hours of light!";
  } else if (fileName.includes("banana")) {
    wasteType = "Organic Waste (e.g., Banana Peel)";
    dispose = "Add to compost or biodegradable bin.";
    upcycle = "Use banana peels as fertilizer or polish shoes!";
    toxic = "Minimal toxicity — but methane if dumped in landfill.";
    score = "Composting reduces food waste & enriches soil!";
  } else {
    wasteType = "Electronic Waste (e.g., Phone)";
    dispose = "Locate certified e-waste centers or drop-off points.";
    upcycle = "Turn old phones into security cams or music players!";
    toxic = "Electronics contain mercury, lead, and cadmium.";
    score = "Saving 1 phone = Preventing 55kg of CO₂ emissions!";
  }

  document.getElementById("wasteTitle").innerText = `📱 ${wasteType}`;
  document.getElementById("disposeText").innerText = dispose;
  document.getElementById("upcycleText").innerText = upcycle;
  document.getElementById("toxicText").innerText = toxic;
  document.getElementById("scoreText").innerText = score;
};

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Placeholder buttons
document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered eco suggestions!");
};
document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Nearby recycling bin locator!");
};
