const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const secDeg = (sec / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDeg}deg)`;
  if (sec === 60) {
    secHand.style.transition = "none";
  } else {
    secHand.style.transition = "all .05s;";
    secHand.style.transitionTimingFunction = "cubic-bezier(0, 2.85, 0.58, 1);";
  }

  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + (sec / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);
