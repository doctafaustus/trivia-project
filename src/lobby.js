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
  console.log({tabContentToShow});
});


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


// Show dummy messages
for (let i = 0; i < 3; i++) {
  const messageClones = $('#tab-party-content li').clone();
  $('#tab-party-content ul').prepend(messageClones);
}

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



