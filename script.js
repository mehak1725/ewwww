document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("inputs", file);

  document.getElementById("result").innerText = "🧠 Scanning...";

  try {
    // 1. Securely fetch token from Vercel backend
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    // 2. Call working Hugging Face model
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
    console.error("Error during scan:", error);
    document.getElementById("result").innerText = `⚠️ Error scanning image`;
  }
};

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
