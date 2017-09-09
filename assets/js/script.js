
// Adds the styles that make the small header show on mobile, based on scroll
$(document).scroll(function(e) {
  height = $( window ).height();
  transition = (height - 40)/2 - 40;
  $(window).scrollTop() > transition ? $('#small-head').addClass('show') : $('#small-head').removeClass('show');
});

$(document).scroll(function(e) {
  height = $( window ).height();
  transition = 100;
  $(window).scrollTop() > transition ? $('#big-header').addClass('trans-big-header') : $('#big-header').removeClass('trans-big-header');
  $(window).scrollTop() > transition ? $('#h1-container').addClass('trans-h1-container') : $('#h1-container').removeClass('trans-h1-container');
  $(window).scrollTop() > transition ? $('#h1').addClass('trans-h1') : $('#h1').removeClass('trans-h1');
});
