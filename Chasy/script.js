const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const plans = document.getElementById('plans');

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBackgroundGreet() {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 2){
        document.body.style.backgroundImage = "url('11-Mid-Night.png')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    else if (hour < 4){
        document.body.style.backgroundImage = "url('12-Late-Night.png')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    else if (hour < 6){
        document.body.style.backgroundImage = "url('01-Early-Morning.png')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 8){
        document.body.style.backgroundImage = "url('02-Mid-Morning.png')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 10){
        document.body.style.backgroundImage = "url('03-Late-Morning.png')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 12){
        document.body.style.backgroundImage = "url('04-Early-Afternoon.png')";
        greeting.textContent = 'Hello';
    }
    else if (hour < 14){
        document.body.style.backgroundImage = "url('05-Mid-Afternoon.png')";
        greeting.textContent = 'Hello';
    }
    else if (hour < 16){
        document.body.style.backgroundImage = "url('06-Late-Afternoon.png')";
        greeting.textContent = 'Hello';
    }
    else if (hour < 18){
        document.body.style.backgroundImage = "url('07-Early-Evening.png')";
        greeting.textContent = 'Good Evening';
    }
    else if (hour < 20){
        document.body.style.backgroundImage = "url('08-Mid-Evening.png')";
        greeting.textContent = 'Good Evening';
    }
    else if (hour < 22){
        document.body.style.backgroundImage = "url('09-Late-Evening.png')";
        greeting.textContent = 'Good Evening';
    }
    else if (hour = 22 || 23){
        document.body.style.backgroundImage = "url('10-Early-Night.png')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    
    if (hour = 0 || 2 || 4 || 6 || 8 || 10 || 12 || 14 || 16 || 18 || 20 || 22) {
        setTimeout("location.href='index.html'",3601000);
    }

}

showTime();
setBackgroundGreet();