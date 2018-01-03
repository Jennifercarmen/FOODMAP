jQuery(document).ready(function() {
  $('.logo').animate({
    'left': '+=28%'
  }, 'slow');
  $('h4').animate({
    'font-size': 24,
    'border-width': 5
  }, 1800);
  setTimeout(function() {
    window.location.href = 'views/main.html';
  }, 3000);
});