document.addEventListener("DOMContentLoaded", () => {
  const water_today = document.getElementById("water_today");

  let cupSize = 250;
  let is500 = false;
  let isAnimating = false;

  let isDarkMode = false;
  let isThemeAnimating = false;

  async function updateWater(newValue) {
    water_today.textContent = newValue;

    await fetch("water.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        water: newValue,
      }),
    });
  }

  let addAnimation = lottie.loadAnimation({
    container: document.getElementById("addWaterButton"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/Plus_Light.json",
  });

  let subtractAnimation = lottie.loadAnimation({
    container: document.getElementById("subtractWaterButton"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/Minus_Light.json",
  });

  let choiceAnimation = lottie.loadAnimation({
    container: document.getElementById("choice"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/ml_Light.json",
  });

  const lightdarkAnimation = lottie.loadAnimation({
    container: document.getElementById("lightdark"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/LightDark.json",
  });

  addAnimation.addEventListener("DOMLoaded", () => {
    addAnimation.goToAndStop(0, true);
  });

  subtractAnimation.addEventListener("DOMLoaded", () => {
    subtractAnimation.goToAndStop(0, true);
  });

  choiceAnimation.addEventListener("DOMLoaded", () => {
    choiceAnimation.goToAndStop(0, true);
  });

  lightdarkAnimation.addEventListener("DOMLoaded", () => {
    lightdarkAnimation.goToAndStop(0, true);
  });

  document.getElementById("choice").addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;

    const half = 49;

    if (!is500) {
      choiceAnimation.stop();
      choiceAnimation.playSegments([0, half], true);

      const onComplete = () => {
        choiceAnimation.removeEventListener("complete", onComplete);

        choiceAnimation.goToAndStop(half, true);

        cupSize = 500;
        is500 = true;
        isAnimating = false;
      };

      choiceAnimation.addEventListener("complete", onComplete);
    } else {
      choiceAnimation.stop();
      choiceAnimation.playSegments([half, 99], true);

      const onComplete = () => {
        choiceAnimation.removeEventListener("complete", onComplete);

        choiceAnimation.goToAndStop(99, true);

        cupSize = 250;
        is500 = false;
        isAnimating = false;
      };

      choiceAnimation.addEventListener("complete", onComplete);
    }
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

      if (currentWater <= 0) return;

      subtractAnimation.goToAndPlay(0, true);

      updateWater(currentWater - cupSize);
    });
  lightdarkAnimation.addEventListener("DOMLoaded", () => {
    console.log("totalFrames:", lightdarkAnimation.totalFrames);
  });
  document.getElementById("lightdark").addEventListener("click", () => {
    if (isThemeAnimating) return;

    isThemeAnimating = true;

    const half = 89;

    if (!isDarkMode) {
      lightdarkAnimation.stop();
      lightdarkAnimation.playSegments([0, half], true);

      const onComplete = () => {
        lightdarkAnimation.removeEventListener("complete", onComplete);

        lightdarkAnimation.goToAndStop(half, true);
        isDarkMode = true;
        document.documentElement.classList.add("dark-mode");

        isThemeAnimating = false;
      };

      lightdarkAnimation.addEventListener("complete", onComplete);
    } else {
      lightdarkAnimation.stop();
      lightdarkAnimation.playSegments([half, 179], true);

      const onComplete = () => {
        lightdarkAnimation.removeEventListener("complete", onComplete);

        lightdarkAnimation.goToAndStop(89, true);

        isDarkMode = false;
        document.documentElement.classList.remove("dark-mode");

        isThemeAnimating = false;
      };

      lightdarkAnimation.addEventListener("complete", onComplete);
    }
  });
});
