


  $(document).scroll(function(e) {
    height = $( window ).height();
    transition = (0.66 * height) - 50;
    $(window).scrollTop() > transition ? $('#small-head').addClass('show') : $('#small-head').removeClass('show');
  });


