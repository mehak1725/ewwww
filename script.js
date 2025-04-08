const wasteData = {
  organic: {
    label: "🍌 Organic Waste (e.g., Banana Peel)",
    details: {
      "♻️ How to Dispose:": "Compost it at home or use a local composting facility.",
      "🎨 Upcycling Idea:": "Use peels as plant fertilizer, skin moisturizer, or shine leaves.",
      "☠️ Toxic Alert:": "Can attract pests, produce methane if landfilled.",
      "⭐ Eco Score:": "Composting enriches soil and reduces greenhouse gases."
    }
  },
  plastic: {
    label: "🧴 Plastic Waste (e.g., Bottle)",
    details: {
      "♻️ How to Dispose:": "Rinse and place in plastic recycling. Avoid burning it.",
      "🎨 Upcycling Idea:": "Turn into planters, organizers, or eco-bricks.",
      "☠️ Toxic Alert:": "Releases microplastics, harmful if burned.",
      "⭐ Eco Score:": "Recycling plastic saves energy and reduces landfill load."
    }
  },
  electronic: {
    label: "💻 Electronic Waste (e.g., Old Phone)",
    details: {
      "♻️ How to Dispose:": "Drop at certified e-waste recycling center.",
      "🎨 Upcycling Idea:": "Convert into art, clocks, or learning kits.",
      "☠️ Toxic Alert:": "Contains lead, mercury, and other toxins.",
      "⭐ Eco Score:": "Proper disposal prevents soil/water pollution."
    }
  }
};

function scanWaste() {
  const input = document.getElementById('wasteInput');
  const file = input.files[0];
  const preview = document.getElementById('preview');
  const result = document.getElementById('result');

  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;

    // Simulate classification
    const types = ['organic', 'plastic', 'electronic'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const data = wasteData[randomType];

    result.innerHTML = `<h2>${data.label}</h2>` + Object.entries(data.details).map(
      ([title, desc]) =>
        `<div class="card" onclick="showPopupFromCard('${title}', \`${desc}\`)"><strong>${title}</strong><br>${desc}</div>`
    ).join('');
  };
  reader.readAsDataURL(file);
}

function showPopup(type) {
  const popup = document.getElementById("popup");
  const title = document.getElementById("popup-title");
  const message = document.getElementById("popup-message");

  if (type === "eco") {
    title.textContent = "🌿 Eco Suggestions";
    message.textContent = "Reuse items, compost food waste, and recycle responsibly to minimize your environmental footprint.";
  } else if (type === "bins") {
    title.textContent = "📍 Recycle Bin Locator";
    message.textContent = "Search online or use apps like Google Maps to find nearby e-waste or plastic recycling centers.";
  }

  popup.style.display = "flex";
}

function showPopupFromCard(title, message) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
