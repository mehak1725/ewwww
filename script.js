// 👇 Open file dialog when scan button clicked
document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

// 👇 When image selected, send to Hugging Face API
document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("inputs", file);

  document.getElementById("result").innerText = "🧠 Scanning...";

  try {
    // 1. Securely fetch Hugging Face token from your backend
    const tokenRes = await fetch("/api/token");
    const { token } = await tokenRes.json();

    // 2. Use a more reliable model
    const response = await fetch("https://api-inference.huggingface.co/models/nateraw/vit-base-patch16-224-in21k", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await response.json();
    console.log("🔍 API Response:", result); // <-- LOG RESPONSE FOR DEBUGGING

    // 3. Show the result or error message
    if (Array.isArray(result) && result.length > 0 && result[0].label) {
      document.getElementById("result").innerText = `📦 AI thinks it's: ${result[0].label}`;
    } else if (result.error) {
      document.getElementById("result").innerText = `⚠️ Error: ${result.error}`;
    } else {
      document.getElementById("result").innerText = `❌ Could not identify item`;
    }
  } catch (err) {
    console.error("🔥 Error scanning image:", err);
    document.getElementById("result").innerText = `❌ Something went wrong`;
  }
};

// ✅ Dark mode toggle
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
