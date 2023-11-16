$("#custom").on('click', () => {
  console.log(this)
  let cls = $(".tab-section")[0].lastElementChild.classList;
  if (cls.contains('tab-hide')) {
    cls.remove('tab-hide');
  } else {
    cls.add('tab-hide');
  }
});