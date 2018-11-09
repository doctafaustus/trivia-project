// Add SCSS styles
const css = require('../style.scss');


const countdownNumberEl = document.getElementById('countdown-number');
let countdown = 10;
countdownNumberEl.textContent = countdown;

const timer = setInterval(() => {
  countdown = --countdown <= 0 ? 10 : countdown;
  countdownNumberEl.textContent = countdown;
}, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 1000);


// Flash status dots
let statusDots = '';
(function flashStatusDots() {
  statusDots = (statusDots.length === 4) ? '' : statusDots + '.';
  $('#status-dots').text(statusDots);
  //setTimeout(flashStatusDots, 425);
})();

