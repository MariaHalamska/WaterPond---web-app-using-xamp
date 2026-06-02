document.addEventListener("DOMContentLoaded", () => {
  const subtractWaterButton = document.getElementById("subtractWaterButton");
  const water_today = document.getElementById("water_today");
  const choice = document.getElementById("choice");
  let cupSize = 250;

  async function updateWater(newValue) {
    water_today.textContent = newValue;
    await fetch("water.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ water: newValue }),
    });
  }

  const choiceAnimation = lottie.loadAnimation({
    container: document.getElementById("choice"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/ml_Light.json",
  });

  choiceAnimation.addEventListener("DOMLoaded", () => {
    choiceAnimation.goToAndStop(0, true);
  });

  document.getElementById("choice").addEventListener("click", () => {
    cupSize = cupSize === 250 ? 500 : 250;
    choiceAnimation.goToAndPlay(0, true);
  });

  const addAnimation = lottie.loadAnimation({
    container: document.getElementById("addWaterButton"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/Plus_Light.json",
  });
  const subtractAnimation = lottie.loadAnimation({
    container: document.getElementById("subtractWaterButton"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/Minus_Light.json",
  });

  addAnimation.addEventListener("DOMLoaded", () => {
    addAnimation.goToAndStop(0, true);
  });

  document.getElementById("addWaterButton").addEventListener("click", () => {
    addAnimation.goToAndPlay(0, true);
    const currentWater = parseInt(water_today.textContent);
    updateWater(currentWater + cupSize);
  });

  document
    .getElementById("subtractWaterButton")
    .addEventListener("click", () => {
      const currentWater = parseInt(water_today.textContent);
      if (currentWater <= 0) return; // zatrzymaj jeśli 0
      subtractAnimation.goToAndPlay(0, true);
      updateWater(currentWater - cupSize);
    });
});
