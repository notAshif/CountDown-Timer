let inputDate = document.getElementById("date");
let inputTime = document.getElementById("time");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let dayElem = document.getElementById('day');
let hourElem = document.getElementById('hour');
let minuteElem = document.getElementById('minute');
let secondElem = document.getElementById('sec');

let countDown;

window.onload = () => {
    startBtn.addEventListener('click', () => {

        clearInterval(countDown);

        let date = new Date(`${inputDate.value}T${inputTime.value}`).getTime();
        const now = new Date().getTime();
        let distance = date - now;

        if (distance <= 0 && distance >= 0) {
            alert("Please select a future or past date and time.");
            return;
        }

        countDown = setInterval(() => {
            const nowTime = new Date().getTime();
            distance = date - nowTime;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            dayElem.innerHTML = days;
            hourElem.innerHTML = hours;
            minuteElem.innerHTML = minutes;
            secondElem.innerHTML = seconds;

            if (distance <= 0) {
                clearInterval(countDown);
                alert('Countdown finished');
            }

        }, 1000);
    });
}

stopBtn.addEventListener('click', () => {
    clearInterval(countDown);
    alert('Countdown Stop!');
});
