$(document).ready(function() {
    $('#github-link').on('click', function() {
      window.open($(this).attr('href'));
    });
  
    $('#linkedin-link').on('click', function() {
      window.open($(this).attr('href'));
    });
  
    $('nav ul li a').on('click', function(e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
      $('.section').addClass('hidden');
      $(target).removeClass('hidden');
    });
  
    // Show home section by default
    $('#home').removeClass('hidden');
  });
  