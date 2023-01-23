import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateInput = document.querySelector('#datetime-picker')
const startBtn = document.querySelector("[data-start]")
startBtn.setAttribute('disabled', 'true')
const now = new Date()
const selectedTime = new Date(dateInput.value)
console.log(new Date(dateInput.value))


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
            window.alert("Please choose a date in the future")
            startBtn.setAttribute('disabled', 'true')
        } else {
            startBtn.removeAttribute('disabled')
        }
    }
}

flatpickr(dateInput, options)
function convertMs(ms) {
  // Number of milliseconds per unit of time
const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
const days = Math.floor(ms / day);
  // Remaining hours
const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
const seconds = Math.floor((((ms % day) % hour) % minute) / second);

return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {

})

