document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  // Mock logic based on filename
  const fileName = file.name.toLowerCase();
  let type = "Unknown";
  let dispose = "";
  let upcycle = "";
  let toxic = "";
  let eco = "";

  if (fileName.includes("plastic")) {
    type = "Plastic Waste (e.g., Bottle)";
    dispose = "Clean and toss into plastic recycling. Check recycling codes!";
    upcycle = "Turn into plant holders, keychains, or eco-bricks!";
    toxic = "Plastics can take centuries to break down, leaching microplastics.";
    eco = "Recycling 1 plastic bottle saves enough energy to power a bulb for 3 hrs.";
  } else if (fileName.includes("e") || fileName.includes("phone")) {
    type = "Electronic Waste (e.g., Phone)";
    dispose = "Locate certified e-waste centers. Never trash electronics!";
    upcycle = "Convert old phones to security cams or media players.";
    toxic = "Electronics contain mercury and lead — toxic to soil and water.";
    eco = "Saving 1 phone = prevents 55kg CO₂ emissions!";
  } else if (fileName.includes("banana") || fileName.includes("organic")) {
    type = "Organic Waste (e.g., Banana Peel)";
    dispose = "Use for compost or bury in garden. Biodegradable!";
    upcycle = "Use peel as fertilizer or polish for silver & shoes!";
    toxic = "Usually non-toxic, but attracts pests if left exposed.";
    eco = "Composting diverts waste & enriches soil naturally!";
  } else {
    type = "Unidentified Waste";
    dispose = "Try renaming your file to include 'plastic', 'phone', or 'banana'.";
    upcycle = "-";
    toxic = "-";
    eco = "-";
  }

  document.getElementById("wasteType").innerText = type;
  document.getElementById("disposeText").innerText = dispose;
  document.getElementById("upcycleText").innerText = upcycle;
  document.getElementById("toxicText").innerText = toxic;
  document.getElementById("ecoText").innerText = eco;
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions, eco-points & upcycling ideas!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Feature coming soon: Locate recycling bins near you!");
};
