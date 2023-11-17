// $(':radio').on('click', (event) => {
//   let radioId = event.currentTarget.id;
//   if (radioId === 'custom') {
//     $('#spec').show();
//     $(':button').on('click', () => {
//       $('.tab-link').toggleClass('active');
//     });
//   } else {
//     $('#spec').hide();
//     if ($('#details').hasClass('active')) $('#details').toggleClass('active');
//     else $('#details').toggleClass('active');
//   }
// });

$(':radio').on('click', (event) => {
  console.log('radio event')
  console.log('radio event')
  console.log('radio event')
  if (event.currentTarget.id === 'custom') {
    console.log('inside if')
    $('#spec').show();
    $(':button').on('click', () => {
      $('.tab-link').toggleClass('active');
    });
    // if ($('#details').hasClass('active')) $('#details').toggleClass('active');
    // else $('#details').toggleClass('active');
  }
  if (event.currentTarget.id === 'auto') {
    console.log('radio else')
    $('#spec').hide();
  }
});



