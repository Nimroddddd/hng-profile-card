window.addEventListener("load", () => {
  const now = new Date();
  const utcHour = now.getUTCHours().toString().padStart(2, "0")
  const utcMinutes = now.getUTCMinutes().toString()
  const currentTime = utcHour + ":" + utcMinutes
  document.querySelector(".time").innerHTML = currentTime
})