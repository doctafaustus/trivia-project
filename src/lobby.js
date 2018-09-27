// Add SCSS styles
const css = require('./lobby.scss');

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
//$('#menu li[data-tab-id=invite-friends]').click();


// Sidebar tab toggle
$('.tab').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('.tab, .tab-content').removeClass('active');
  $currentTab.add(`#${tabContentToShow}`).addClass('active');
}); 
$('.tab').eq(1).trigger('click');

// How to play close
$('.how-to-play-close').click(function() {
  $('.how-to-play-container').hide();
});

// Temporary invite functionality
$('.side-bar').on('click', '.tab-content .player-invite', function() {
  const $li = $(this).closest('li');
  const playerInvited = $li.hasClass('invited');
  if (!playerInvited) {
    $li.addClass('invited');
  } else {
    $li.removeClass('invited');
  }
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
    <div class="chat-submenu">
      <svg class="chat-submenu-dots" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
        <g class="style-scope yt-icon">
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>
        </g>
      </svg>
      <div class="boot">Remove from party</div>
    </div>
  </li>`;
  $('#tab-party-content #party-messages').prepend(formattedMessage);
  $chatInput.val('');
});



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


// Boot party member
function hideSubmenus() {
  $('#party-messages li.submenu-open').removeClass('submenu-open');
}
$('#tab-party-content').on('click', '.chat-submenu-dots', function() {
  const $parentMessage = $(this).closest('li');
  $parentMessage.addClass('submenu-open');
  $(document).one('mousedown', function(e) {
    if (!e.target.matches('.boot')) hideSubmenus();
  });
});
$('#tab-party-content').on('click', '.boot', function() {
  console.log('Clicked submeu');
  hideSubmenus();
});




