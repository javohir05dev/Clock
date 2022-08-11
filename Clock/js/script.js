window.addEventListener('DOMContentLoaded', () => {
    let numbers = document.querySelectorAll('.number');
    let spans = document.querySelectorAll('.number span');
    let deg = 30;
    const audio = document.getElementById('audio');

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].style.transform = `rotate(${deg}deg)`;
        spans[i].style.transform = `rotate(-${deg}deg)`;
        deg += 30;
    }

    let mlsDeg = 6;
    let milliseconds = document.querySelectorAll('.mls');

    for (const mls of milliseconds) {
        mls.style.transform = `rotate(${mlsDeg}deg)`;
        mlsDeg += 6
    }

    let secondHand = document.querySelector('.second');
    let minuteHand = document.querySelector('.minute');
    let hourHand = document.querySelector('.hour');

    function time() {
        audio.play();
        let date = new Date();
        let second = date.getSeconds();
        let minute = date.getMinutes();
        let hour = date.getHours();
        secondHand.style.transform = `rotate(${second * 6}deg)`;
        minuteHand.style.transform = `rotate(${minute * 6}deg)`;
        hourHand.style.transform = `rotate(${(hour * 30) + (30 / (60 / minute))}deg)`;
    }

    setInterval(() => {
        time()
    }, 1000);
})