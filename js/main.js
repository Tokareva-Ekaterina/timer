const newYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`);

const daysValue = document.querySelector('.timer__days .timer__value');
const hoursValue = document.querySelector('.timer__hours .timer__value');
const minutesValue = document.querySelector('.timer__minutes .timer__value');
const secondsValue = document.querySelector('.timer__seconds .timer__value');

const daysText = document.querySelector('.timer__days .timer__text');
const hoursText = document.querySelector('.timer__hours .timer__text');
const minutesText = document.querySelector('.timer__minutes .timer__text');
const secondsText = document.querySelector('.timer__seconds .timer__text');

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function timeCount() {
    let now = new Date();
    let difference = newYear - now;

    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(difference / 1000 / 60) % 60;
    let seconds = Math.floor(difference / 1000) % 60;
    
    if (days < 10) days = '0' + days;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    daysValue.textContent = days;
    hoursValue.textContent = hours;
    minutesValue.textContent = minutes;
    secondsValue.textContent = seconds;

    daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
    hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
    minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
    secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
}

timeCount();
setInterval(timeCount, 1000);

