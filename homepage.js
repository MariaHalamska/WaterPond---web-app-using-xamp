document.addEventListener("DOMContentLoaded", () => {
  if ("Notification" in window) {
    Notification.requestPermission();
  }
  function sendNotification() {
    if (Notification.permission === "granted") {
      const currentWater = parseInt(currentWaterValue);
      new Notification("Water Time!", {
        body: `Remember to drink some water!`,
        icon: "src/lilia_light.svg",
      });
    }
  }

  let currentWaterValue = initialWater;

  let cupSize = 250;
  let is500 = false;
  let isAnimating = false;

  let isDarkMode = localStorage.getItem("theme") === "dark";
  let isThemeAnimating = false;

  let notificationsEnabled = localStorage.getItem("notifications") === "true";
  let isNotifAnimating = false;
  let notifInterval = null;
  const notifBtn = document.getElementById("notificationButton");

  if (isDarkMode) {
    document.documentElement.classList.add("dark-mode");
  }
  notifBtn.title = notificationsEnabled
    ? "Notifications on"
    : "Notifications off";

  const notifAnimation = lottie.loadAnimation({
    container: document.getElementById("notificationButton"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "src/Fala.json",
  });

  notifAnimation.addEventListener("DOMLoaded", () => {
    notifAnimation.goToAndStop(notificationsEnabled ? 42 : 0, true);
  });

  document
    .getElementById("notificationButton")
    .addEventListener("click", () => {
      if (isNotifAnimating) return;
      isNotifAnimating = true;

      if (!notificationsEnabled) {
        notifAnimation.playSegments([0, 42], true); // od wyłączonego do włączonego
        const onComplete = () => {
          notifAnimation.removeEventListener("complete", onComplete);
          notifAnimation.goToAndStop(42, true);
          notificationsEnabled = true;
          localStorage.setItem("notifications", "true");
          startNotifications();
          isNotifAnimating = false;
          notificationsEnabled = true;
          notifBtn.title = "Notifications on";
        };
        notifAnimation.addEventListener("complete", onComplete);
      } else {
        notifAnimation.playSegments([42, 89], true); // od włączonego do wyłączonego
        const onComplete = () => {
          notifAnimation.removeEventListener("complete", onComplete);
          notifAnimation.goToAndStop(89, true);
          notificationsEnabled = false;
          localStorage.setItem("notifications", "false");
          stopNotifications();
          isNotifAnimating = false;
          notificationsEnabled = false;
          notifBtn.title = "Notifications off";
        };
        notifAnimation.addEventListener("complete", onComplete);
      }
    });

  function startNotifications() {
    if (notifInterval) clearInterval(notifInterval);
    notifInterval = setInterval(sendNotification, 20 * 60 * 1000);
  }

  function stopNotifications() {
    clearInterval(notifInterval);
    notifInterval = null;
  }

  if (notificationsEnabled) startNotifications();

  async function updateWater(newValue) {
    updateWaterImage(newValue);
    currentWaterValue = newValue;

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
    lightdarkAnimation.goToAndStop(isDarkMode ? 89 : 0, true);
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

    const currentWater = parseInt(currentWaterValue);
    if (currentWater >= 2500) return;

    updateWater(currentWater + cupSize);
  });

  document
    .getElementById("subtractWaterButton")
    .addEventListener("click", () => {
      const currentWater = parseInt(currentWaterValue);

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
        localStorage.setItem("theme", "dark");
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
        localStorage.setItem("theme", "light");
        isThemeAnimating = false;
      };

      lightdarkAnimation.addEventListener("complete", onComplete);
    }
  });
});
