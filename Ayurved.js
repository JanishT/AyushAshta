var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      464: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      3000: {
        slidesPerView: 5,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});