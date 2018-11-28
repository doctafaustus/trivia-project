import auth0 from './js/auth0';

auth0();

// Add SCSS styles
const css = require('./style.scss');

// Invitation Learn More
$('.invitation-list').on('click', '.toggle-learn-more', function(e) {
  $(this).closest('.invitation-middle').toggleClass('info-veil');
});


// Menu tab toggle
$(window).on('hashchange', function() {
  let clickedHash = window.location.hash.replace('#', '');
  if (clickedHash === '') clickedHash = 'home';
  const $currentTab = $(`#menu li[data-tab-id=${clickedHash}]`);

  // First reset/remove the active class from the menu and content
  $('section, #menu li').removeClass('active');

  // Apply the active class to the clicked menu and content
  $currentTab.add(`#page-${clickedHash}`).addClass('active');
  localStorage.lastPageVisited = clickedHash;
  setTabContentHeight();
});
$(`#menu li[data-tab-id=${localStorage.lastPageVisited || 'home'}]`).add(`#page-${localStorage.lastPageVisited || 'home'}`).addClass('active').click();

// Mobile menu close
$('#menu li').click(hideMenu);



// Footer navigation
$('#footer-links a').click(function() {
  const linkID = $(this).attr('data-tab-id');
  const target = $(`#menu li[data-tab-id=${linkID}]`);
  target.click();
});


// Sidebar tab toggle
$('.tab').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('.tab, .tab-content').removeClass('active');
  $currentTab.add(`#${tabContentToShow}`).addClass('active');
  setTabContentHeight();
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

  // If on mobile trigger a blur event to bring down keyboard and properly reshow previously hidden content from when the keyboard was open
  if ($(window).width() < 1099) {
    $('#chat-input').trigger('blur');
    setTabContentHeight();
  }
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

// Back to top
$('#scroll-top').click(function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});


// Countdown Timer
$('#countdown-clock').FlipClock(10, {
  clockFace: 'MiniteCounter',
  countdown: true,
  callbacks: {
    stop: function() {
      console.log('DONE!');
    },
  },
});


// Burger Menu
$('#burger-menu').click(function() {
  $('html, body').addClass('mobile-menu-open');
});

$('.overlay').click(hideMenu);

function hideMenu() {
  $('html, body').removeClass('mobile-menu-open');
}






$(window).resize(setTabContentHeight);
setTabContentHeight();

// Lobby tab content height setter
function setTabContentHeight() {
  const $sideBar = $('.side-bar');
  const $partyMessages = $('#party-messages');
  const sideBarOffset = $sideBar.offset().top;
  const windowHeight = $(window).height();
  const tabsHeight = $('.tabs').outerHeight();
  const chatFormHeight = $('.chat-form').outerHeight();

  const newSideBarHeight = windowHeight - sideBarOffset;
  const newChatSize = newSideBarHeight - (tabsHeight + chatFormHeight);

  $sideBar.attr('style', `height: ${newSideBarHeight}px;`);
  $partyMessages.attr('style', `height: ${newChatSize}px;`);

  if (windowHeight > 1099) {
    $sideBar.attr('style', 'height: auto;');
    $partyMessages.attr('style', 'height: 451px;');
  }
}



$('#chat-input').on('focus', function() {
  if (!isMobile()) return;
  $('.chat-form').addClass('keyboard-open');
});

$('#chat-input').on('blur', function() {
  if (!isMobile()) return;
  $('.chat-form').removeClass('keyboard-open');
});


function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
}