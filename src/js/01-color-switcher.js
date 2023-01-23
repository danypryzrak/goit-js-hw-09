function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body")
const startBtn = document.querySelector('button[data-start]')
const stopBtn = document.querySelector('button[data-stop]')
let colorChange = null


startBtn.addEventListener('click', () => {
colorChange = setInterval(() => {
body.style.backgroundColor = getRandomHexColor()
  }, 1000);
  startBtn.setAttribute('disabled', 'true')
})

stopBtn.addEventListener("click", () => {
  clearInterval(colorChange)
  startBtn.removeAttribute("disabled")
})
