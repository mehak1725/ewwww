document.getElementById("scanBtn").onclick = () => {
  document.getElementById("fileInput").click();
};

document.getElementById("toggleModeBtn").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("fileInput").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("imagePreview");
  const result = document.getElementById("result");
  const details = document.getElementById("details");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image"/>`;
    };
    reader.readAsDataURL(file);

    // Simulate AI detection (mocked)
    const types = ["plastic", "organic", "electronic"];
    const type = types[Math.floor(Math.random() * types.length)];

    const data = {
      plastic: {
        label: "📦 Plastic Waste (e.g., Bottle)",
        dispose: "Clean and place in plastic recycling bins.",
        upcycle: "Make eco bricks or DIY planters.",
        toxic: "Takes 1000+ years to decompose!",
        eco: "Recycling 1 bottle saves enough energy to power a bulb for 3 hours."
      },
      organic: {
        label: "🍌 Organic Waste (e.g., Banana Peel)",
        dispose: "Compost it in a home or community bin.",
        upcycle: "Create natural fertilizers or banana peel polish!",
        toxic: "Not toxic but methane emissions if landfilled.",
        eco: "Composting prevents greenhouse gas release!"
      },
      electronic: {
        label: "📱 Electronic Waste (e.g., Phone)",
        dispose: "Locate certified e-waste centers. Never trash electronics!",
        upcycle: "Convert old phones to security cams or media players.",
        toxic: "Electronics contain mercury and lead — toxic to soil and water.",
        eco: "Saving 1 phone = prevents 55kg CO₂ emissions!"
      }
    };

    const info = data[type];
    result.innerText = info.label;
    document.getElementById("dispose").innerHTML = `♻️ <strong>How to Dispose:</strong> ${info.dispose}`;
    document.getElementById("upcycle").innerHTML = `🎨 <strong>Upcycling Idea:</strong> ${info.upcycle}`;
    document.getElementById("toxic").innerHTML = `☠️ <strong>Toxic Alert:</strong> ${info.toxic}`;
    document.getElementById("eco").innerHTML = `⭐ <strong>Eco Score:</strong> ${info.eco}`;
    details.style.display = "grid";
  }
});

// Dummy Eco Suggestions & Bin Locator
document.getElementById("ecoBtn").onclick = () => {
  alert("🌿 Tip: Carry your own bottle. Avoid single-use plastic!");
};

document.getElementById("locateBtn").onclick = () => {
  window.open("https://www.google.com/maps/search/recycle+bin+near+me", "_blank");
};
