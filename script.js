document.getElementById("scanBtn").onclick = () => {
  document.getElementById("imageInput").click();
};

document.getElementById("imageInput").onchange = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append("image", file);

  document.getElementById("result").innerText = "🧠 Scanning...";

  const response = await fetch("http://localhost:3000/scan", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  document.getElementById("result").innerText = `📦 AI thinks it's: ${data.label || "unknown item"}`;
};

document.getElementById("suggestBtn").onclick = () => {
  alert("💡 Eco Suggestions coming from GPT-4 soon!");
};

document.getElementById("locateBtn").onclick = () => {
  alert("📍 Fetching nearest recycle bins... (Map integration soon!)");
};

document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};
