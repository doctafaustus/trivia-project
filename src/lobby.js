// Add SCSS styles
const css = require('./lobby-style.scss');

console.log('Hello world!');

// Invitation Learn More
$('.invitation-list').on('click', '.toggle-learn-more', function(e) {
  $(this).closest('.invitation-middle').toggleClass('info-veil');
});


// Menu tab toggle
$('#menu li').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('section, #menu li').removeClass('active');
  $currentTab.add(`#page-${tabContentToShow}`).addClass('active');
});
$('#menu li[data-tab-id=invite-friends]').click();


// Sidebar tab toggle
$('.tab').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('.tab, .tab-content').removeClass('active');
  $currentTab.add(`#${tabContentToShow}`).addClass('active');
}); 
$('.tab:last').trigger('click');

// How to play close
$('.how-to-play-close').click(function() {
  $('.how-to-play-container').hide();
});


// Chat functionality
$('.chat-form').submit(function(e) {
  e.preventDefault();
  const $chatInput = $('#chat-input');
  const message = $chatInput.val();
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
  </li>`;
  $('#tab-party-content ul').prepend(formattedMessage);
  $chatInput.val('');
});


// Show dummy messages
for (let i = 0; i < 3; i++) {
  const messageClones = $('#tab-party-content li').clone();
  $('#tab-party-content ul').prepend(messageClones);
}

// Show dummy leadboard data
let fakeLeaderboardRows = ''
for (let i = 0; i < 123; i++) {
  fakeLeaderboardRows += `<div class="leaderboard-row">
    <div class="lb-rank">${i + 3}</div>
    <div class="lb-player-icon-and-name">
      <div class="lb-player-icon">
          <img src="https://api.adorable.io/avatars/40/${i}doctafaustus@adorable.png">
      </div>
      <div class="lb-player-name">doctafaustus</div>
    </div>
    <div class="lb-wins">13</div>
    <div class="lb-games-played">27</div>
    <div class="lb-total-points">4565</div>
  </div>`;
}
$('.leaderboard').append(fakeLeaderboardRows);
