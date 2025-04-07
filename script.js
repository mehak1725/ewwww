document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('scanBtn').addEventListener('click', () => {
  document.getElementById('imageInput').click();
});

document.getElementById('imageInput').addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('preview').src = e.target.result;
      // 🔄 Here you can add API call to classify image
    };
    reader.readAsDataURL(file);
  }
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
  }
};

// Default load
const currentWaste = "Electronic Waste";
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
