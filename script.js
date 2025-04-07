const wasteData = {
  plastic: {
    type: "Plastic Waste (e.g., Bottle)",
    dispose: "Clean and toss in the plastic recycling bin. Check local recycling rules!",
    upcycle: "Use bottles for planters, bird feeders, or DIY crafts.",
    toxic: "Microplastics pollute oceans and harm wildlife.",
    score: "Recycling 1 bottle = Saving enough energy to light a bulb for 3 hours!"
  },
  electronic: {
    type: "Electronic Waste (e.g., Phone)",
    dispose: "Locate certified e-waste centers or drop-off points. Never throw electronics in trash!",
    upcycle: "Turn old phones into security cams or music players with free apps like AlfredCamera.",
    toxic: "Electronics contain mercury, lead, and cadmium — very harmful to soil and water.",
    score: "Saving 1 phone = Preventing 55kg of CO₂ emissions!"
  },
  organic: {
    type: "Organic Waste (e.g., Banana Peel)",
    dispose: "Compost it or throw in the organic waste bin.",
    upcycle: "Use banana peels to polish shoes or as fertilizer!",
    toxic: "Emits methane if not composted — a greenhouse gas!",
    score: "Composting food waste reduces landfill burden and creates healthy soil!"
  }
};

function classifyWaste(imageSrc) {
  if (imageSrc.includes("banana")) return "organic";
  if (imageSrc.includes("phone") || imageSrc.includes("electronics")) return "electronic";
  return "plastic"; // default
}

function showWasteInfo(type) {
  const info = wasteData[type];

  document.getElementById("wasteInfo").innerHTML = `<h3>📱 ${info.type}</h3>`;

  document.getElementById("card-dispose").innerHTML = `<h4>♻️ How to Dispose</h4><p>${info.dispose}</p>`;
  document.getElementById("card-upcycle").innerHTML = `<h4>🎨 Upcycling Idea</h4><p>${info.upcycle}</p>`;
  document.getElementById("card-toxic").innerHTML = `<h4>☠️ Toxic Alert</h4><p>${info.toxic}</p>`;
  document.getElementById("card-score").innerHTML = `<h4>⭐ Eco Score</h4><p>${info.score}</p>`;

  const cards = document.querySelectorAll(".card-animated");
  cards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.2}s`;
    card.style.opacity = 0;
    card.style.transform = "scale(0.9)";
  });

  document.getElementById("infoCards").style.display = 'flex';
}

document.getElementById("imageUpload").addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageSrc = e.target.result;
    document.getElementById("imagePreview").innerHTML = `<img src="${imageSrc}" alt="Uploaded Waste Image">`;

    const detectedType = classifyWaste(imageSrc.toLowerCase());
    showWasteInfo(detectedType);
  };
  if (file) reader.readAsDataURL(file);
});

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
