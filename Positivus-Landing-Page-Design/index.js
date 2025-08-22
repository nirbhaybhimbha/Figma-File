const toggleBtn = document.querySelector('.menu-toggle');
const navSetFlex = document.querySelector('.nav-set-flex');

toggleBtn.addEventListener('click', () => {
  navSetFlex.classList.toggle('active');
});


// FAQ Process 
$(document).ready(function () {
  $('.accordion .toggle-btn').on('click', function () {
    const $item = $(this).closest('.accordion-item');
    const $svgPath = $(this).find('svg path');
    const isActive = $item.hasClass('active');

    // If this item is already active, close it
    if (isActive) {
      $item.removeClass('active');

      // Change to plus icon
      $svgPath.closest('svg').attr('viewBox', '0 0 26 26');
      $svgPath.attr('d', 'M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z');
      $svgPath.attr('fill', '#191A23');
    } else {
      // Close all items and reset to plus icon
      $('.accordion-item').removeClass('active');
      $('.toggle-btn svg path').each(function () {
        $(this).closest('svg').attr('viewBox', '0 0 26 26');
        $(this).attr('d', 'M9.6 25.58V15.86H0V10.22H9.6V0.5H15.48V10.22H25.08V15.86H15.48V25.58H9.6Z');
        $(this).attr('fill', '#191A23');
      });

      // Open this item and set minus icon
      $item.addClass('active');
      $svgPath.closest('svg').attr('viewBox', '0 0 18 7');
      $svgPath.attr('d', 'M0 6.14V0.5H17.76V6.14H0Z');
      $svgPath.attr('fill', 'black');
    }
  });
});



// jQRY slider
$(document).ready(function () {
  const $track = $('.slider-track');
  const $cards = $('.testimonial-card');
  const totalSlides = $cards.length;
  let currentIndex = 0;

  // Dots
  for (let i = 0; i < totalSlides; i++) {
    $('.dots').append(`<span data-index="${i}"></span>`);
  }
  const $dots = $('.dots span');
  $dots.eq(0).addClass('active');

  function updateSlider(index) {
    $track.css('transform', `translateX(-${index * 100}%)`);
    $dots.removeClass('active').eq(index).addClass('active');
    currentIndex = index;
  }

  $('.next').on('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
  });

  $('.prev').on('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider(currentIndex);
  });

  $dots.on('click', function () {
    const index = $(this).data('index');
    updateSlider(index);
  });

  // Optional auto-slide every 5s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
  }, 2000);
});
