if(screen.width >= 1024) {
  var x = 3;
} else if (screen.width >= 450) {
  var x = 2;
} else {
  var x = 1;
}

$('.show-box').slick({
    slidesToShow: x,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });