function updateWaterImage(value) {
  // zaokrągl do najbliższego 250
  const rounded = Math.round(value / 250) * 250;
  // nie wychodź poza zakres 0-2500
  const clamped = Math.min(2500, Math.max(0, rounded));

  const img = document.getElementById("water_today_img");
  img.src = `src/numbers/ml_${clamped}.svg`;
}
