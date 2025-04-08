// Scan Waste button triggers file input
document.getElementById("scanBtn").addEventListener("click", () => {
  document.getElementById("imageInput").click();
});

// Handle image upload + show preview
document.getElementById("imageInput").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById("wasteImage");
      img.src = e.target.result;
      img.style.display = "block";
      document.getElementById("wasteInfo").style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

// Info popup logic
function showPopup(title, text) {
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Dark mode toggle
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
