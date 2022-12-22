$(document).ready(function() {
  jQuery('.grid-item').hover(
    function(){
      $(this).find('.cover-item-gallery').fadeIn();
    },
    function(){
      $(this).find('.cover-item-gallery').fadeOut();
    }
  );
});


// external js: masonry.pkgd.js

$('grid-first-column').masonry({
    itemSelector: '.grid-item',
    columnWidth: 378
  });

$('grid-second-column').masonry({
    itemSelector: '.grid-item',
    columnWidth: 378
  });

$('.grid2').masonry({
    itemSelector: '.grid-item',
    columnWidth: 182
  });

$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 123
  });

$('.container').masonry({
    itemSelector: '.block',
    columnWidth: 382
  });


  // прибирання кнопки після кліку на неї, додавання анімації завантаження та нових картинок
const buttn = document.querySelector('.last-button');
buttn.addEventListener('click', (e) => {
  buttn.remove();
  const loadAnimation = document.querySelector('.preloader');
  loadAnimation.classList.add('hide-preloader');
    setTimeout(function() {
      loadAnimation.classList.add('preloader-hidden');
  const addImgMasonryFirstClm = document.querySelector('.grid-first-column');
  addImgMasonryFirstClm.insertAdjacentHTML('beforeend', '<div class="grid-item"><img src="./img/gallery/img2.png" alt="#"></div>');
  const addImgMasonrySecondClm = document.querySelector('.grid-second-column');
  addImgMasonrySecondClm.insertAdjacentHTML('beforeend', '<div class="grid-item"><img src="./img/gallery/img3.png" alt="#"></div>');
}, 2000);
  const footer = document.querySelector('.footer');
  footer.style.marginTop = '500px';
});
