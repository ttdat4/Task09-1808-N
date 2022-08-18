//Slick slider
$(document).ready(function () {
  $('.c-mainvisual').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 2000,
    fade: true,
    dots: false,
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false,
    swipe: false
  });
});


$(".c-mainvisual__scrolltexta").click(function () {

  $("#c-about").animate({
    scrollTop: 0
  }, 2000, "linear", function () {});

});


// Function click button open menu
const $menu = $('.c-menu')
$('.c-header__btnopen').click(function () {
  $menu.show(2000);
  $('.c-header__btnopen').fadeOut(2000);
  $('.c-header__btnclose').fadeIn(2000);
});
$('.c-header__btnclose').click(function () {
  $menu.hide(2000);
  $('.c-header__btnopen').fadeIn(2000);
  $('.c-header__btnclose').fadeOut(2000);
});

//Function swap tab
$(function () {
  $('.c-tab li:first-child').addClass('is-active');
  $('.c-tabcontent').hide(500);
  $('.c-tabcontent:first').show(500);
  $('.c-tab li').click(function () {
    $('.c-tab li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.c-tabcontent').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
});
//Scroll
jQuery(function ($) {
  var doAnimations = function () {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.is-animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function () {
      var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('is-animatable').addClass('is-animated');
      }
    });
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});

//Function Backtotop
jQuery(function ($) {
  var $recruitBtn = $(".is-backtotop");
  $recruitBtn.addClass("is-hidetop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $recruitBtn.removeClass("is-hidetop");
    } else {
      $recruitBtn.addClass("is-hidetop");
    }
  });
});

$(".is-backtotop").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 2000);
  return false;
});


//Function scroll mouse move up item
const items = document.querySelectorAll('.is-moveup');

const active = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-view');
    } else {
      entry.target.classList.remove('is-view');
    }
  });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}

jQuery(function ($) {
  $(".c-photowrap__img1 img").click(function () {
    $('.c-photowrap__popup').fadeIn();
    var img = $(this).attr("src");
    var appearImage = "<div class='c-photowrap__popupimg'>";
    appearImage = appearImage.concat("<img id='is-img' src='" + img + "' alt='私たちの仕事内容の一部を動画と写真でお伝えします.'> <div class='c-btnclosephoto'><div class='c-btnclosephoto__wrapper'> <div class='c-btnclosephoto__wrapperclose c-btnclosephoto__wrapperclose1'></div> <div class='c-btnclosephoto__wrapperclose c-btnclosephoto__wrapperclose2'></div></div><p class='c-btnclosephoto__text'>閉じる</p></div></div>");
    $('.c-photowrap__popupimg').replaceWith(appearImage);
    console.log(appearImage);
    $('.c-photowrap__popup').click(function () {
      $('.c-photowrap__popup').fadeOut();
    })
  });
});

// $(document).ready(function() {
//   $(".c-btnclosephoto__text").click(function () {
//     // $('.c-photowrap__popup').hide(800);
//     console.log("dat dep trai");
//   });
// });

$(document).on("click", ".c-btnclosephoto__text", function () {
  $('.c-photowrap__popup').fadeOut();
  console.log('dat dep trai');
});


//Function click interview image 1 popup modal 1
$(document).ready(function () {
  var modal = $('#is-interview__popup1');
  var btn = $('.c-interview__img1');
  // var close = $('.c-btnclosephoto__text');

  btn.click(function () {
    modal.show();
  });

  // close.click(function () {
  //   modal.hide();
  // });

  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup1')) {
      modal.hide();
    }
  });
});

//Function click interview image 2 popup modal 2
$(document).ready(function () {
  var modal = $('#is-interview__popup2');
  var btn = $('.c-interview__img2');
  // var close = $('.c-btnclosephoto__text');

  btn.click(function () {
    modal.show();
  });

  // close.click(function () {
  //   modal.hide();
  // });

  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup2')) {
      modal.hide();
    }
  });
});


//Function click interview image 3 popup modal 3
$(document).ready(function () {
  var modal = $('#is-interview__popup3');
  var btn = $('.c-interview__img3');
  // var close = $('.c-btnclosephoto__text');
  // var close1 = $('.c-interview__popupwrapper');

  btn.click(function () {
    modal.show();
  });

  // close.click(function () {
  //   modal.hide();
  // });
  // close1.click(function () {
  //   modal.hide();
  // });

  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup3')) {
      modal.hide();
    }
  });
});



$(document).on("click", ".is-close", function () {
  $('.c-interview__popup').fadeOut();
});
$(document).on("click", ".c-interview__popupwrapper", function () {
  $('.c-interview__popup').fadeOut();
});


// $(function () {
//   slideinout();
// });

// function slideinout() {
//   if (!$("#is-slider").length) return;
//   var slider = $("#is-slider");
//   slider.on("init", function () {
//     slider.find(".slick-current").removeClass("slick-animated");
//   });

//   slider.slick({
//     fade: true,
//     dots: false,
//     arrows: false,
//     autoplay: false,
//     autoplaySpeed: 5000,
//     speed: 2000,
//     cssEase: "cubic-bezier(0.25, 0.1, 0.25, 1)",
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     swipe: false,
//   });
//   slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
//     slick.$slides.eq(nextSlide).addClass("slick-animated");
//     setTimeout(function () {
//       slider
//         .find(".slick-slide:not(.slick-current)")
//         .removeClass("slick-animated");
//     }, 1500);
//   });
//   setTimeout(function () {
//     slider.slick("slickPlay");
//     slider.find(".slick-current").addClass("slick-animated");
//   }, 2000);
// }
