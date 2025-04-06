document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("inputs", file);

  document.getElementById("result").innerText = "🧠 Scanning...";

  // 1. Fetch Hugging Face token securely from /api/token
  const tokenRes = await fetch("/api/token");
  const { token } = await tokenRes.json();

  // 2. Call Hugging Face API securely with the fetched token
  const response = await fetch("https://api-inference.huggingface.co/models/google/vit-base-patch16-224", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const result = await response.json();

  if (Array.isArray(result) && result.length > 0 && result[0].label) {
    document.getElementById("result").innerText = `📦 AI thinks it's: ${result[0].label}`;
  } else {
    document.getElementById("result").innerText = `❌ Could not identify item`;
  }
};
