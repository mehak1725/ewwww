document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";

  const formData = new FormData();
  formData.append("inputs", file);

  document.getElementById("result").innerText = "🧠 Scanning...";

  try {
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    const response = await fetch("https://api-inference.huggingface.co/models/google/vit-base-patch16-224", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await response.json();
    console.log("🔍 API Response:", result);

    if (Array.isArray(result) && result.length > 0 && result[0].label) {
      document.getElementById("result").innerText = `📦 AI thinks it's: ${result[0].label}`;
    } else {
      document.getElementById("result").innerText = `❌ Could not identify item`;
    }

  } catch (error) {
    console.error("⚠️ Error scanning image", error);
    document.getElementById("result").innerText = `⚠️ Error scanning image`;
  }
};

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Placeholder alerts
document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Coming soon: Eco Suggestions based on scanned item!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Coming soon: Locate nearby recycling bins!");
};
