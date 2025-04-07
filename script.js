const mockData = {
  plastic: {
    type: "🧴 Plastic Waste (e.g., Bottle)",
    dispose: "Use local plastic collection bins. Clean before recycling!",
    upcycle: "Turn bottles into planters, lamps, or vertical gardens.",
    toxic: "Plastic breaks down into microplastics — harmful to marine life.",
    eco: "Recycling 1 bottle = saving enough energy to power a light bulb for 6 hours!",
  },
  electronic: {
    type: "📱 Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers. Never trash electronics!",
    upcycle: "Convert old phones to security cams or media players.",
    toxic: "Electronics contain mercury and lead — toxic to soil and water.",
    eco: "Saving 1 phone = prevents 55kg CO₂ emissions!",
  },
  organic: {
    type: "🍌 Organic Waste (e.g., Banana Peel)",
    dispose: "Compost in your backyard or organic bins.",
    upcycle: "Banana peels make great fertilizer or natural polish.",
    toxic: "If not composted, organic waste produces methane gas.",
    eco: "Composting reduces landfill mass and improves soil quality!",
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

  // Fake classifier based on filename
  const filename = file.name.toLowerCase();
  let type = "plastic";
  if (filename.includes("phone") || filename.includes("laptop")) type = "electronic";
  else if (filename.includes("banana") || filename.includes("fruit")) type = "organic";

  const data = mockData[type];

  document.getElementById("result").innerHTML = `
    <h2>${data.type}</h2>
    <h3>♻️ How to Dispose</h3><p>${data.dispose}</p>
    <h3>🎨 Upcycling Idea</h3><p>${data.upcycle}</p>
    <h3>☠️ Toxic Alert</h3><p>${data.toxic}</p>
    <h3>⭐ Eco Score</h3><p>${data.eco}</p>
  `;
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
