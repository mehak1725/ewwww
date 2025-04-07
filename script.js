document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const filename = file.name.toLowerCase();
  let type = "";
  if (filename.includes("plastic")) type = "plastic";
  else if (filename.includes("organic")) type = "organic";
  else type = "ewaste";

  showWasteInfo(type);
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions, eco-points, upcycling ideas & more!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Visit your city’s waste portal to find nearby recycling bins.");
};

function showWasteInfo(type) {
  const wasteType = document.getElementById("wasteType");
  const infoCards = document.getElementById("infoCards");
  infoCards.innerHTML = "";

  const data = {
    ewaste: {
      label: "📱 Electronic Waste (e.g., Phone)",
      cards: [
        { title: "♻️ How to Dispose", text: "Locate certified e-waste centers. Never trash electronics!" },
        { title: "🎨 Upcycling Idea", text: "Convert old phones to security cams or media players." },
        { title: "☠️ Toxic Alert", text: "Electronics contain mercury and lead — toxic to soil and water." },
        { title: "⭐ Eco Score", text: "Saving 1 phone = prevents 55kg CO₂ emissions!" }
      ]
    },
    plastic: {
      label: "🧴 Plastic Waste (e.g., Bottle)",
      cards: [
        { title: "♻️ How to Dispose", text: "Rinse and drop in plastics bin. Avoid single-use plastics." },
        { title: "🎨 Upcycling Idea", text: "Make planters, organizers or art from bottles and containers!" },
        { title: "☠️ Toxic Alert", text: "Plastic breaks into microplastics — harmful to animals & humans." },
        { title: "⭐ Eco Score", text: "Recycling 1 bottle saves enough energy to power a bulb for 6 hours!" }
      ]
    },
    organic: {
      label: "🍌 Organic Waste (e.g., Banana Peel)",
      cards: [
        { title: "♻️ How to Dispose", text: "Compost at home or use community compost bins." },
        { title: "🎨 Upcycling Idea", text: "Use banana peel to shine shoes or feed to compost worms!" },
        { title: "☠️ Toxic Alert", text: "Organic waste in landfills produces methane — a greenhouse gas." },
        { title: "⭐ Eco Score", text: "Composting reduces 50% of your waste and enriches soil!" }
      ]
    }
  };

  const selected = data[type];
  wasteType.innerText = selected.label;

  selected.cards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${card.title}</h3><p>${card.text}</p>`;
    infoCards.appendChild(div);
  });
}
