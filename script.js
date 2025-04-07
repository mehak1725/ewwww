const wasteData = {
  plastic: {
    type: "Plastic Waste (e.g., Bottle)",
    dispose: "Use yellow recycling bins. Clean before discarding!",
    upcycle: "Turn bottles into planters or lamp holders.",
    toxic: "Plastic breaks into microplastics, polluting oceans & harming wildlife.",
    score: "Recycling 1 bottle = Saving enough energy to power a bulb for 3 hrs.",
  },
  electronic: {
    type: "Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers or drop-off points.",
    upcycle: "Old phones can be security cams or music players!",
    toxic: "Contains mercury, lead, cadmium — harmful to soil & water.",
    score: "Saving 1 phone = Preventing 55kg of CO₂ emissions!",
  },
  organic: {
    type: "Organic Waste (e.g., Banana Peel)",
    dispose: "Compost at home or use community bins.",
    upcycle: "Peels can be used as natural fertilizers or skincare masks.",
    toxic: "If dumped, releases methane — a potent greenhouse gas.",
    score: "Composting saves landfill space and improves soil health.",
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

  document.getElementById("result").innerText = "🔍 Analyzing...";

  setTimeout(() => {
    const fileName = file.name.toLowerCase();
    let category = "organic";
    if (fileName.includes("plastic")) category = "plastic";
    else if (fileName.includes("phone") || fileName.includes("e-waste")) category = "electronic";

    const info = wasteData[category];
    document.getElementById("result").innerText = `📱 ${info.type}`;

    const infoHTML = `
      <div class="card"><h3>♻️ How to Dispose</h3><p>${info.dispose}</p></div>
      <div class="card"><h3>🎨 Upcycling Idea</h3><p>${info.upcycle}</p></div>
      <div class="card"><h3>☠️ Toxic Alert</h3><p>${info.toxic}</p></div>
      <div class="card"><h3>⭐ Eco Score</h3><p>${info.score}</p></div>
    `;
    document.getElementById("infoCards").innerHTML = infoHTML;
  }, 1000);
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Placeholder buttons
document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions!");
};
document.getElementById("locateBtn").onclick = () => {
  alert("📍 Feature to locate recycling bins is coming soon!");
};
