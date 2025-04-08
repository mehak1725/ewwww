document.getElementById("toggleDark").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// MOCKED scan result (replace with real API integration if needed)
const mockWasteType = "Organic Waste (e.g., Banana Peel)";
const mockImage =
  "https://cdn-icons-png.flaticon.com/512/590/590685.png";
const mockDetails = [
  {
    title: "♻️ How to Dispose:",
    content: "Compost it at home or use a local composting facility.",
  },
  {
    title: "🎨 Upcycling Idea:",
    content: "Use peels for natural fertilizer or shine leaves!",
  },
  {
    title: "☠️ Toxic Alert:",
    content: "Can attract pests if not disposed properly.",
  },
  {
    title: "⭐ Eco Score:",
    content: "Composting reduces methane emissions and enriches soil!",
  },
];

// Scan button (mock result)
document.getElementById("scanBtn").addEventListener("click", () => {
  document.getElementById("previewImage").src = mockImage;
  document.getElementById("wasteType").innerText = `🍌 ${mockWasteType}`;
  displayInfoCards(mockDetails);
});

// Display info cards
function displayInfoCards(details) {
  const container = document.getElementById("infoCards");
  container.innerHTML = "";
  details.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${item.title}</strong><p>${item.content}</p>`;
    card.addEventListener("click", () => openModal(item.title, item.content));
    container.appendChild(card);
  });
}

// Modal functionality
function openModal(title, content) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalContent").innerText = content;
  document.getElementById("modal").style.display = "block";
}

document.querySelector(".close-btn").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (event) => {
  if (event.target === document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
};

// Optional buttons (non-functional in mock version)
document.getElementById("ecoBtn").addEventListener("click", () => {
  alert("💡 Eco Tips coming soon!");
});

document.getElementById("locateBtn").addEventListener("click", () => {
  alert("📍 Recycle bin locator coming soon!");
});
