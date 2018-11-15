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



// Chat functionality
$('.chat-form').submit(function(e) {
  e.preventDefault();
  const $chatInput = $('#chat-input');
  const message = $chatInput.val();
  console.log('message', message);
  if (message.trim() === '') return console.log('No message');
  const randomNum = Math.floor(Math.random() * 1000);
  const formattedMessage = `<li>
    <div class="player-icon">
      <img src="https://api.adorable.io/avatars/40/${randomNum}@adorable.png">
    </div>
    <div class="name-and-message">
      <span class="player-name">${randomNum}</span>
      <span class="message">${message}</span>
    </div>
    <div class="chat-submenu">
      <svg class="chat-submenu-dots" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
        <g class="style-scope yt-icon">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>
        </g>
      </svg>
      <div class="boot">Remove from party</div>
    </div>
  </li>`;
  $('#party-messages').prepend(formattedMessage);
  $chatInput.val('');
});


$(window).resize(setTabContentHeight);
setTabContentHeight();

// Lobby tab content height setter
function setTabContentHeight() {
  const $chat = $('.game-chat');
  const chatOffset = $chat.offset().top;
  const chatFormHeight = $('.chat-form').outerHeight();
  const windowHeight = $(window).height();
  const newChatHeight = windowHeight - (chatOffset + chatFormHeight) - 5;

  console.log(newChatHeight);
  $('#party-messages').attr('style', `height: ${newChatHeight}px;`);
}

