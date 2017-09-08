
// Adds the styles that make the small header show on mobile, based on scroll
$(document).scroll(function(e) {
  height = $( window ).height();
  transition = (height - 40)/2 - 40;
  $(window).scrollTop() > transition ? $('#small-head').addClass('show') : $('#small-head').removeClass('show');
});


