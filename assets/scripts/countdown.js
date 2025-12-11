const eventDate = new Date("Jun 13, 2026 2:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "See You Next Year!";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = `
        <div class="countdown-container"><div>${days}</div><div style="font-size:.5em;">DAYS</div></div>
        <div class="countdown-container"><div>${hours}</div><div style="font-size:.5em;">HOURS</div></div>
        <div class="countdown-container"><div>${minutes}</div><div style="font-size:.5em;">MINUTES</div></div>
        <div class="countdown-container"><div>${seconds}</div><div style="font-size:.5em;">SECONDS</div></div>
      `;
}
setInterval(updateCountdown, 1000);
updateCountdown();
