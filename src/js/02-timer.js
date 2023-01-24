import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
import "notiflix/dist/notiflix-3.2.6.min.css"

const dateInput = document.querySelector('#datetime-picker')
const startBtn = document.querySelector("[data-start]")
const timerDays = document.querySelector('[data-days]')
const timerHours = document.querySelector('[data-hours]')
const timerMinutes = document.querySelector('[data-minutes]')
const timerSeconds = document.querySelector('[data-seconds]')


let selectedTime


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
            Notiflix.Notify.failure("Please choose a date in the future")
            startBtn.disabled = true
        } else {
            startBtn.disabled = false
            selectedTime = selectedDates[0].getTime()
            
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
  
  if (ms === 0) {
    () => {
      clearInterval(timerok)
    }
  }

return { days, hours, minutes, seconds };
}

startBtn.addEventListener('click', () => {
    const timerok = setInterval(() => {
        let dateDiff = selectedTime - new Date()
        if (dateDiff > 1) {
          startBtn.disabled = true
          let times = convertMs(dateDiff)
        timerDays.textContent = addLeadingZero(times.days)
        timerHours.textContent = addLeadingZero(times.hours)
        timerMinutes.textContent = addLeadingZero(times.minutes)
        timerSeconds.textContent = addLeadingZero(times.seconds)
        } else {
          clearInterval(timerok)
          timerDays.textContent = '00'
        timerHours.textContent = '00'
        timerMinutes.textContent = '00'
          timerSeconds.textContent = '00'
          Notiflix.Report.success("Time's up",
            'Congratulations, your time is out yet',
          'Oooooooooh yes')
        }
        
}, 1000)
})

function addLeadingZero(value) {
return String(value).padStart(2, '0')
}



