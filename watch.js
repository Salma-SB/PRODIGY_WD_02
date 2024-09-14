// watch.js

let h = 0; // Hours
let m = 0; // Minutes
let s = 0; // Seconds
let intervalId; // To store the ID of the interval for clearing it later

function watch() {
    s += 1;
    if (s === 60) {
        s = 0;
        m += 1;
        if (m === 60) {
            m = 0;
            h += 1;
        }
    }
    document.querySelector('.heure').textContent = String(h).padStart(2, '0');
    document.querySelector('.minute').textContent = String(m).padStart(2, '0');
    document.querySelector('.second').textContent = String(s).padStart(2, '0');
}

document.querySelector('.fa-play-circle-o').addEventListener('click', function() {
    console.log('Play button clicked');
    if (!intervalId) {
        intervalId = setInterval(watch, 100);
    }
});

document.querySelector('.fa-stop').addEventListener('click', function() {
    console.log('Stop button clicked');
    clearInterval(intervalId);
    intervalId = null;
});

document.querySelector('.fa-refresh').addEventListener('click', function() {
    console.log('Refresh button clicked');
    s = 0;
    m = 0;
    h = 0;
    document.querySelector('.heure').textContent = String(h).padStart(2, '0');
    document.querySelector('.minute').textContent = String(m).padStart(2, '0');
    document.querySelector('.second').textContent = String(s).padStart(2, '0');
    clearInterval(intervalId);
    intervalId = null;
});
