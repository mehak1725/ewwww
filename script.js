document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const resultEl = document.getElementById("result");
  resultEl.innerText = "🧠 Scanning...";

  // Simulated detection (mock AI)
  setTimeout(() => {
    const fileName = file.name.toLowerCase();
    let type = "plastic";

    if (fileName.includes("phone") || fileName.includes("laptop")) type = "electronic";
    else if (fileName.includes("banana") || fileName.includes("food")) type = "organic";

    const data = {
      plastic: {
        label: "📦 Plastic Waste (e.g., Bottle)",
        dispose: "♻️ How to Dispose\nClean and dry, drop in plastic recycling bin.",
        upcycle: "🎨 Upcycling Idea\nTurn bottles into planters, lamps or organizers.",
        toxic: "☠️ Toxic Alert\nTakes up to 500 years to decompose; microplastics pollute oceans.",
        eco: "⭐ Eco Score\nRecycling 1 bottle saves enough energy to power a light bulb for 3 hours."
      },
      electronic: {
        label: "📱 Electronic Waste (e.g., Phone)",
        dispose: "♻️ How to Dispose\nLocate certified e-waste centers. Never trash electronics!",
        upcycle: "🎨 Upcycling Idea\nConvert old phones to security cams or media players.",
        toxic: "☠️ Toxic Alert\nElectronics contain mercury and lead — toxic to soil and water.",
        eco: "⭐ Eco Score\nSaving 1 phone = prevents 55kg CO₂ emissions!"
      },
      organic: {
        label: "🍌 Organic Waste (e.g., Banana Peel)",
        dispose: "♻️ How to Dispose\nCompost at home or use community compost bins.",
        upcycle: "🎨 Upcycling Idea\nMake banana peel fertilizer or clean silverware naturally.",
        toxic: "☠️ Toxic Alert\nOrganic waste in landfills creates methane, a potent greenhouse gas.",
        eco: "⭐ Eco Score\nComposting 1kg waste reduces 0.5kg CO₂!"
      }
    };

    const info = data[type];
    resultEl.innerText = info.label;
    document.getElementById("dispose").innerText = info.dispose;
    document.getElementById("upcycle").innerText = info.upcycle;
    document.getElementById("toxic").innerText = info.toxic;
    document.getElementById("eco").innerText = info.eco;
  }, 1000);
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Personalized eco suggestions, challenges & tips!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Locate feature coming: We’ll help you find nearby bins and drop points!");
};
