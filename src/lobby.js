// Add SCSS styles
const css = require('./lobby-style.scss');

console.log('Hello world!');

// Invitation Learn More
$('.invitation-list').on('click', '.toggle-learn-more', function(e) {
  $(this).closest('.invitation-middle').toggleClass('info-veil');
});


// Sidebar tab toggle
$('.tab').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('.tab, .tab-content').removeClass('active');
  $currentTab.add(`#${tabContentToShow}`).addClass('active');
}); 


// How to play close
$('.how-to-play-container .info-close').click(function() {
  $('.how-to-play-container').hide();
});