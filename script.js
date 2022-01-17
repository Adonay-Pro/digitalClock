window.addEventListener('load',calculateTime);

function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hour >= 12 ? 'PM':'AM';
    let dayNames = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

hour = hour % 12;
hour = hour ? hour : '12';
hour = hour < 10 ? '0' + hour : hour;
minute = minute < 10 ? '0' + minute : minute;
seconds =seconds < 10 ? '0' + seconds : seconds;


document.getElementById('day').innerHTML = dayNames[dayNumber];
document.getElementById('hour').innerHTML = hour;
document.getElementById('min').innerHTML = minute;
document.getElementById('sec').innerHTML = seconds;
document.getElementById('ampm').innerHTML = ampm;


setTimeout(calculateTime, 1000);
}

