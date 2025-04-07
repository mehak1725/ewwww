document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

const wasteData = {
  "Electronic Waste": {
    decompose: "1 million years",
    suggestion: "Recycle via certified e-waste centers.",
    tip: "Never throw electronics in the trash — they leak toxic chemicals!",
    cards: [
      {
        title: "♻️ How to Dispose",
        text: "Locate certified e-waste centers or drop-off points.",
        extra: "You can find nearby centers on your city’s waste management portal."
      },
      {
        title: "🎨 Upcycling Idea",
        text: "Turn old phones into security cams or music players!",
        extra: "Apps like AlfredCamera let you turn old phones into home security cams easily."
      },
      {
        title: "☠️ Toxic Alert",
        text: "Electronics contain mercury, lead, and cadmium — harmful to soil and water.",
        extra: "These can cause serious health and environmental hazards if not disposed properly."
      },
      {
        title: "⭐ Eco Score",
        text: "Saving 1 phone = Preventing 55kg of CO₂ emissions!",
        extra: "Reducing e-waste reduces mining of lithium and cobalt."
      }
    ]
  },

  "Plastic Waste": {
    decompose: "450 years",
    suggestion: "Recycle plastic bottles, bags, and containers at collection points.",
    tip: "Avoid single-use plastics — use reusable items!",
    cards: [
      {
        title: "♻️ How to Dispose",
        text: "Clean and separate plastic before recycling.",
        extra: "Check your area’s guidelines on recyclable plastics."
      },
      {
        title: "🎨 Upcycling Idea",
        text: "Turn plastic bottles into planters or organizers.",
        extra: "Cut, paint, and reuse bottles creatively!"
      },
      {
        title: "☠️ Toxic Alert",
        text: "Plastic can release microplastics into water sources.",
        extra: "These particles harm marine life and may affect human health."
      },
      {
        title: "⭐ Eco Score",
        text: "Recycling 1 ton of plastic = saving 5,774 kWh energy!",
        extra: "Reduces greenhouse gas emissions significantly."
      }
    ]
  }

  // Add more types like Organic, Metal, etc.
};

// For demo — simulate waste type
const currentWaste = "Electronic Waste"; // change to "Plastic Waste" for demo

const waste = wasteData[currentWaste];
document.getElementById("wasteType").innerText = currentWaste;
document.getElementById("decomposeTime").innerText = waste.decompose;
document.getElementById("suggestion").innerText = waste.suggestion;
document.getElementById("ecoTip").innerText = waste.tip;

const infoCards = document.getElementById("infoCards");
infoCards.innerHTML = "";

waste.cards.forEach(card => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${card.title}</h3><p>${card.text}</p><p><em>${card.extra}</em></p>`;
  infoCards.appendChild(div);
});
