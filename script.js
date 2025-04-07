const scanBtn = document.getElementById("scanBtn");
const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

const scanScreen = document.getElementById("scanScreen");
const detailsScreen = document.getElementById("detailsScreen");

const wasteType = document.getElementById("wasteType");
const decomposeTime = document.getElementById("decomposeTime");
const suggestion = document.getElementById("suggestion");
const ecoTip = document.getElementById("ecoTip");

const backBtn = document.getElementById("backBtn");
const moreInfo = document.getElementById("moreInfo");

scanBtn.onclick = () => imageInput.click();

imageInput.onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  result.innerText = "🧠 Scanning...";

  await new Promise((res) => setTimeout(res, 2000));

  const mockedResults = [
    {
      type: "📱 Electronic Waste (e.g., Phone)",
      time: "♻️ Decomposition Time: 1 million years",
      suggestion: "✅ Suggestion: Recycle via certified e-waste centers.",
      tip: "🌱 Eco Tip: Never throw electronics in trash — they leak toxic chemicals!"
    },
    {
      type: "🍌 Organic Waste (e.g., Banana Peel)",
      time: "♻️ Decomposition Time: 2 weeks",
      suggestion: "✅ Suggestion: Compost at home or community bins.",
      tip: "🌱 Eco Tip: Composting enriches soil and reduces methane!"
    },
    {
      type: "🥤 Plastic Waste (e.g., Bottle)",
      time: "♻️ Decomposition Time: 450 years",
      suggestion: "✅ Suggestion: Use plastic recycling bins.",
      tip: "🌱 Eco Tip: Avoid single-use plastics whenever possible!"
    }
  ];

  const selected = mockedResults[Math.floor(Math.random() * mockedResults.length)];

  wasteType.innerText = selected.type;
  decomposeTime.innerText = selected.time;
  suggestion.innerText = selected.suggestion;
  ecoTip.innerText = selected.tip;

  result.innerText = selected.type;

  scanScreen.classList.add("hidden");
  detailsScreen.classList.remove("hidden");
};

backBtn.onclick = () => {
  scanScreen.classList.remove("hidden");
  detailsScreen.classList.add("hidden");
  result.innerText = "🧠 Waiting for image...";
};

moreInfo.onclick = () => {
  alert("🌍 Coming soon: AI-powered recycling suggestions, eco-points, upcycling ideas & nearby bins!");
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Eco Suggestions based on scanned item!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Locate nearby recycling bins!");
};
