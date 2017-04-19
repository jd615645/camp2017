$(document).ready(function() {
  particlesJS.load('bg', '../json/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  // $('.modal').modal()
  $('.detail').click(function() {
    var which_detail = $(this).attr('value');
    $('#' + which_detail).css('z-index', 1050);
    $('#' + which_detail).modal('show');

  });

  $('.modal .close').click(function() {
    var which_detail = $(this).attr('value');
    $('#' + which_detail).css('z-index', 1050);
    $('#' + which_detail).modal('hide');
  });
});