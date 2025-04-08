const wasteData = {
  plastic: {
    type: "📦 Plastic Waste (e.g., Bottle)",
    details: [
      {
        title: "♻️ How to Dispose:",
        content: "Rinse and put in a plastic recycle bin."
      },
      {
        title: "🎨 Upcycling Idea:",
        content: "Make planters or pen stands from plastic bottles!"
      },
      {
        title: "☠️ Toxic Alert:",
        content: "Plastics pollute oceans and harm wildlife."
      },
      {
        title: "⭐ Eco Score:",
        content: "Recycling 1 bottle saves energy to power a lightbulb for 3 hours!"
      }
    ]
  },
  electronic: {
    type: "📱 Electronic Waste (e.g., Phone)",
    details: [
      {
        title: "♻️ How to Dispose:",
        content: "Locate certified e-waste centers. Never trash electronics!"
      },
      {
        title: "🎨 Upcycling Idea:",
        content: "Convert old phones to security cams or media players."
      },
      {
        title: "☠️ Toxic Alert:",
        content: "Electronics contain mercury and lead — toxic to soil and water."
      },
      {
        title: "⭐ Eco Score:",
        content: "Saving 1 phone = prevents 55kg CO₂ emissions!"
      }
    ]
  },
  organic: {
    type: "🍌 Organic Waste (e.g., Banana Peel)",
    details: [
      {
        title: "♻️ How to Dispose:",
        content: "Compost it at home or use a local composting facility."
      },
      {
        title: "🎨 Upcycling Idea:",
        content: "Use peels for natural fertilizer or shine leaves!"
      },
      {
        title: "☠️ Toxic Alert:",
        content: "Can attract pests if not disposed properly."
      },
      {
        title: "⭐ Eco Score:",
        content: "Composting reduces methane emissions and enriches soil!"
      }
    ]
  }
};

const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const resultType = document.getElementById("resultType");
const infoCards = document.getElementById("infoCards");

// Simulate AI label by checking file name
function detectWasteType(filename) {
  filename = filename.toLowerCase();
  if (filename.includes("plastic")) return "plastic";
  if (filename.includes("phone") || filename.includes("electronic")) return "electronic";
  if (filename.includes("banana") || filename.includes("organic")) return "organic";
  return "plastic"; // default
}

document.getElementById("scanBtn").onclick = () => {
  imageInput.click();
};

imageInput.onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const wasteType = detectWasteType(file.name);
  const data = wasteData[wasteType];

  resultType.innerText = data.type;
  infoCards.innerHTML = "";

  data.details.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.content}</p>`;
    card.onclick = () => {
      alert(`${item.title}\n\n${item.content}`);
    };
    infoCards.appendChild(card);
  });
};

// Dark mode
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Suggestion alert
document.getElementById("suggestBtn").onclick = () => {
  alert("🌿 Get Eco Suggestions feature coming soon! Personalized tips & actions based on waste type.");
};

// Locate bins alert
document.getElementById("locateBtn").onclick = () => {
  alert("📍 Locate Recycle Bins feature coming soon! You'll find centers near your area.");
};
