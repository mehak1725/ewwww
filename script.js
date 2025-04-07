const wasteData = {
  plastic: {
    type: "Plastic Waste (e.g., bottle, bag)",
    dispose: "Drop plastics at designated recycling bins. Avoid burning plastic as it releases toxins.",
    upcycle: "Turn bottles into planters, bird feeders, or lamps. Tons of DIY projects online!",
    toxic: "Plastic breaks down into microplastics that pollute oceans and harm wildlife.",
    score: "Recycling 1 plastic bottle saves enough energy to power a 60W bulb for 6 hours."
  },
  electronic: {
    type: "Electronic Waste (e.g., phone, charger)",
    dispose: "Recycle at certified e-waste centers. Never toss in regular trash!",
    upcycle: "Convert old phones into security cameras using apps like AlfredCamera.",
    toxic: "E-waste contains mercury, cadmium, and lead — harmful to soil and water.",
    score: "Saving 1 phone prevents 55kg of CO₂ emissions and conserves rare earth metals."
  },
  organic: {
    type: "Organic Waste (e.g., banana peel, food scraps)",
    dispose: "Use compost bins or community compost programs to dispose properly.",
    upcycle: "Make natural fertilizer or use banana peel as plant shine or for skincare!",
    toxic: "Organic waste emits methane in landfills — a potent greenhouse gas.",
    score: "Composting 1kg of food waste saves 2.5kg of CO₂ emissions."
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("imagePreview").innerHTML =
      `<img src="${e.target.result}" alt="Uploaded Waste Image"/>`;

    // Fake AI detection logic – change based on image name
    const lowerName = file.name.toLowerCase();
    let type = "plastic";
    if (lowerName.includes("phone") || lowerName.includes("laptop")) type = "electronic";
    else if (lowerName.includes("banana") || lowerName.includes("food")) type = "organic";

    showWasteInfo(type);
  };
  reader.readAsDataURL(file);
}

function showWasteInfo(type) {
  const info = wasteData[type];
  document.getElementById("wasteInfo").innerHTML = `<h3>📱 ${info.type}</h3>`;

  document.getElementById("card-dispose").innerHTML = `
    <h4>♻️ How to Dispose</h4><p>${info.dispose}</p>`;

  document.getElementById("card-upcycle").innerHTML = `
    <h4>🎨 Upcycling Idea</h4><p>${info.upcycle}</p>`;

  document.getElementById("card-toxic").innerHTML = `
    <h4>☠️ Toxic Alert</h4><p>${info.toxic}</p>`;

  document.getElementById("card-score").innerHTML = `
    <h4>⭐ Eco Score</h4><p>${info.score}</p>`;
}

function getSuggestions() {
  alert("Eco suggestions are shown below based on the waste type you uploaded!");
}
