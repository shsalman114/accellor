$(document).ready(function () {
  $(':radio').on('click', (event) => {
    if (event.currentTarget.id === 'custom') {
      $('#spec').show();
    }
    if (event.currentTarget.id === 'auto') {
      console.log('radio else');
      $('#spec').hide();
      $('#spec').removeClass('c-active');
      if (!$('#details').hasClass('c-active')) {
        $('#details').addClass('c-active');
      }
    }
  });

  $('.specification-section').hide();

  $('.tab-link').on('click', (e) => {
    if ($('#custom')[0].checked) {
      $('.tab-link').removeClass('c-active');
      e.currentTarget.classList.add('c-active');
      if (e.currentTarget.id === 'details') {
        $('.detail-section').show();
        $('.specification-section').hide();
      } else {
        $('.detail-section').hide();
        $('.specification-section').show();
      }
    }
  });

  $('tab-link')
});
