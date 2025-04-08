document.getElementById("scanBtn").addEventListener("click", () => {
  const image = document.getElementById("wasteImage");
  image.src = "https://cdn-icons-png.flaticon.com/512/7687/7687038.png"; // banana preview
  image.style.display = "block";
  document.getElementById("wasteInfo").style.display = "block";
});

document.getElementById("toggleModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

function openPopup(type) {
  const popup = document.getElementById("popupContainer");
  const title = document.getElementById("popupTitle");
  const text = document.getElementById("popupText");

  const content = {
    dispose: {
      title: "♻️ How to Dispose",
      text: `Organic waste should be composted either at home using a compost bin or through a local composting program.
It breaks down into nutrient-rich soil over time, reducing the need for chemical fertilizers.
Always keep compost moist and turn it regularly for best results.
Avoid adding meat, dairy, or oily foods to compost.
Using compost helps your garden thrive and reduces landfill use.`
    },
    upcycle: {
      title: "🎨 Upcycling Idea",
      text: `Banana peels can be used to polish leather or plant leaves.
You can also blend them into garden fertilizer or dry and powder them for potassium-rich soil supplements.
Creative uses include banana peel-infused water as plant tonic or even DIY insect repellent!
Let your creativity turn waste into value.`
    },
    toxic: {
      title: "☠️ Toxic Alert",
      text: `If not disposed properly, organic waste attracts pests like flies, rats, and ants.
It emits methane — a greenhouse gas — in landfills.
Avoid sealing organic waste in plastic bags.
Use breathable compost bags or open bins.
Never dump food waste in regular garbage if composting is available.`
    },
    eco: {
      title: "🌟 Eco Score",
      text: `Organic waste is highly recyclable via composting.
It helps close the loop in nature’s nutrient cycle.
Reducing organic waste in landfills lowers methane emissions significantly.
Composting supports sustainable agriculture and urban farming.
Your small action makes a massive eco impact.`
    }
  };

  title.innerText = content[type].title;
  text.innerText = content[type].text;
  popup.style.display = "flex";
}

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}
