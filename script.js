// Handle Scan Waste image upload + preview
document.getElementById("wasteInput").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("preview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Button alerts
document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Eco Suggestions coming from GPT-4 soon!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Fetching nearest recycle bins... (Map integration soon!)");
};

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
