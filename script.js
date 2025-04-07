// Click to open file picker
document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

// Handle image upload
document.getElementById("imageInput").onchange = (event) => {
  const file = event.target.files[0];
  if (!file) return;

  // Show preview
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  // Show scanning message
  document.getElementById("result").innerHTML = "🧠 Scanning...";

  // Simulate AI scan
  setTimeout(() => {
    const fileName = file.name.toLowerCase();
    let result = "";

    if (fileName.includes("plastic")) {
      result = `
        🧴 Waste Type: <strong>Plastic Bottle</strong><br>
        ♻️ Decomposition Time: <strong>450 years</strong><br>
        ✅ Suggestion: Use refillable bottles instead of single-use plastics.<br>
        🌱 Eco Tip: Join plastic collection drives or upcycle with DIY crafts.
      `;
    } else if (fileName.includes("banana")) {
      result = `
        🍌 Waste Type: <strong>Banana Peel</strong><br>
        ♻️ Decomposition Time: <strong>2–5 weeks</strong><br>
        ✅ Suggestion: Compost it to make nutrient-rich soil.<br>
        🌱 Eco Tip: Mix peels with dry leaves for a balanced compost.
      `;
    } else if (fileName.includes("phone") || fileName.includes("ewaste")) {
      result = `
        📱 Waste Type: <strong>Electronic Waste (e.g., Phone)</strong><br>
        ♻️ Decomposition Time: <strong>1 million years</strong><br>
        ✅ Suggestion: Recycle via certified e-waste centers.<br>
        🌱 Eco Tip: Never throw electronics in the trash — they leak toxic chemicals!
      `;
    } else {
      result = `
        ❓ Unknown Waste Type<br>
        Please upload an image named like "plastic", "banana", or "phone" to test.
      `;
    }

    document.getElementById("result").innerHTML = result;
  }, 1500); // fake scan delay
};

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Coming soon placeholders
document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Eco Suggestions based on scanned item!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Locate nearby recycling bins!");
};
