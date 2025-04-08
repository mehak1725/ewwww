function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const preview = document.getElementById("previewImage");
    preview.src = URL.createObjectURL(file);
    preview.onload = () => URL.revokeObjectURL(preview.src);
    document.getElementById("wasteResult").classList.remove("hidden");

    // Simulate detection result for demo
    showWasteDetails("organic");
  }
}

function scanWaste() {
  document.getElementById("imageUpload").click();
}

function getSuggestions() {
  alert("💡 Use our suggestions to reduce, reuse, and recycle!");
}

function locateBins() {
  alert("📍 Use Google Maps or apps like 'Recycle Nearby' to find recycling bins.");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function showDetail(type) {
  let title = "";
  let content = "";

  if (type === "dispose") {
    title = "♻️ How to Dispose:";
    content = document.getElementById("disposeText").innerText;
  } else if (type === "upcycle") {
    title = "🎨 Upcycling Idea:";
    content = document.getElementById("upcycleText").innerText;
  } else if (type === "toxic") {
    title = "☠️ Toxic Alert:";
    content = document.getElementById("toxicText").innerText;
  } else if (type === "eco") {
    title = "⭐ Eco Score:";
    content = document.getElementById("ecoText").innerText;
  }

  alert(`${title}\n\n${content}`);
}

function showWasteDetails(type) {
  const wasteType = document.getElementById("wasteType");
  const dispose = document.getElementById("disposeText");
  const upcycle = document.getElementById("upcycleText");
  const toxic = document.getElementById("toxicText");
  const eco = document.getElementById("ecoText");

  if (type === "organic") {
    wasteType.innerHTML = "🍌 Organic Waste (e.g., Banana Peel)";
    dispose.innerText = "Compost it at home or use a local composting facility.";
    upcycle.innerText = "Use peels for natural fertilizer or shine leaves!";
    toxic.innerText = "Can attract pests if not disposed properly.";
    eco.innerText = "Composting reduces methane emissions and enriches soil!";
  } else if (type === "plastic") {
    wasteType.innerHTML = "📦 Plastic Waste (e.g., Bottle)";
    dispose.innerText = "Rinse and put in a plastic recycle bin.";
    upcycle.innerText = "Make planters or pen stands!";
    toxic.innerText = "Plastics pollute oceans and harm wildlife.";
    eco.innerText = "Recycling 1 bottle saves enough energy to power a bulb for 3 hours.";
  } else if (type === "electronic") {
    wasteType.innerHTML = "💻 Electronic Waste (e.g., Old Phone)";
    dispose.innerText = "Drop off at certified e-waste centers.";
    upcycle.innerText = "Use old circuits in DIY tech projects.";
    toxic.innerText = "E-waste contains hazardous chemicals.";
    eco.innerText = "Recycling e-waste recovers precious metals and reduces mining.";
  }
}
