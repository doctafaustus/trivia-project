const css = require('./lobby-style.scss');

console.log('hi0');

// Sidebar tab toggle
$('.tab').click(function() {
  const $currentTab = $(this);
  const tabContentToShow = $currentTab.attr('data-tab-id');
  $('.tab, .tab-content').removeClass('active');
  $currentTab.add(`#${tabContentToShow}`).addClass('active');
}); 