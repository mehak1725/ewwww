document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('scanBtn').addEventListener('click', () => {
    document.getElementById('imageInput').click();
  });

  document.getElementById('imageInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById('previewImage').src = reader.result;
        const result = mockWasteDetection();
        displayWasteInfo(result);
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  document.getElementById('suggestBtn').addEventListener('click', () => {
    alert("🌿 Eco Tip: Reduce single-use plastics. Carry a reusable bottle!");
  });

  document.getElementById('binBtn').addEventListener('click', () => {
    window.open("https://www.google.com/maps/search/recycle+bin+near+me", "_blank");
  });

  function mockWasteDetection() {
    const wasteTypes = ["plastic", "electronic", "organic"];
    const random = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
    return random;
  }

  function displayWasteInfo(type) {
    const result = document.getElementById("wasteTypeResult");
    const disposeBox = document.getElementById("disposeBox");
    const upcycleBox = document.getElementById("upcycleBox");
    const toxicBox = document.getElementById("toxicBox");
    const scoreBox = document.getElementById("scoreBox");

    if (type === "plastic") {
      result.innerHTML = "📦 Plastic Waste (e.g., Bottle)";
      disposeBox.innerHTML = "♻️ <b>How to Dispose:</b><br>Rinse and put in a plastic recycle bin.";
      upcycleBox.innerHTML = "🎨 <b>Upcycling Idea:</b><br>Make planters or pen stands!";
      toxicBox.innerHTML = "☠️ <b>Toxic Alert:</b><br>Plastics pollute oceans and harm wildlife.";
      scoreBox.innerHTML = "⭐ <b>Eco Score:</b><br>Recycling 1 bottle saves enough energy to power a lightbulb for 3 hours!";
    } else if (type === "electronic") {
      result.innerHTML = "📱 Electronic Waste (e.g., Phone)";
      disposeBox.innerHTML = "♻️ <b>How to Dispose:</b><br>Locate certified e-waste centers. Never trash electronics!";
      upcycleBox.innerHTML = "🎨 <b>Upcycling Idea:</b><br>Convert old phones to security cams or media players.";
      toxicBox.innerHTML = "☠️ <b>Toxic Alert:</b><br>Electronics contain mercury and lead — toxic to soil and water.";
      scoreBox.innerHTML = "⭐ <b>Eco Score:</b><br>Saving 1 phone = prevents 55kg CO₂ emissions!";
    } else if (type === "organic") {
      result.innerHTML = "🍌 Organic Waste (e.g., Banana Peel)";
      disposeBox.innerHTML = "♻️ <b>How to Dispose:</b><br>Compost at home or use a community bin.";
      upcycleBox.innerHTML = "🎨 <b>Upcycling Idea:</b><br>Use banana peels to polish leather!";
      toxicBox.innerHTML = "☠️ <b>Toxic Alert:</b><br>Organic waste in landfills produces methane gas.";
      scoreBox.innerHTML = "⭐ <b>Eco Score:</b><br>Composting 1kg waste prevents 1.8kg CO₂!";
    }
  }
});
