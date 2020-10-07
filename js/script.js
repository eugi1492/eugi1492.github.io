!(function (e) {
  "use strict";
  $('#cover-img').height(window.innerHeight)
  $('body').show();

  e(window).on("load", function () {
      e(".loader-inner").fadeOut(),
        e(".loader")
        .delay(200)
        .fadeOut("slow");

      // update copyright date
      $("#current-date").text(new Date().getFullYear());
    }),
    e("a.scroll").smoothScroll({
      speed: 800,
      offset: -200
    });
  var i = e(".header"),
    a = i.offset(),
    s = e(".block-top");
  e(window).scroll(function () {
    e(this).scrollTop() > a.top + 500 && i.hasClass("default") ?
      i.fadeOut("fast", function () {
        e(this)
          .removeClass("default")
          .addClass("switched-header")
          .fadeIn(200),
          s.addClass("active");
      }) :
      e(this).scrollTop() <= a.top + 500 &&
      i.hasClass("switched-header") &&
      i.fadeOut("fast", function () {
        e(this)
          .removeClass("switched-header")
          .addClass("default")
          .fadeIn(100),
          s.removeClass("active");
      });
  });
  var t = e(" .hero .main-slider .slides li");

  function l() {
    t.css("height", e(window).height());
  }
  e(function () {
    l();
  });
  // e(window).resize(function () {
  //   $('#cover-img').height(window.innerHeight)
  //   l();
  // });
  var o = e(".mobile-but"),
    n = e(".main-nav ul");
  n.height();
  e(o).on("click", function () {
      return (
        e(".toggle-mobile-but").toggleClass("active"),
        n.slideToggle(),
        e(".main-nav li a").addClass("mobile"),
        !1
      );
    }),
    e(window).resize(function () {
      e(window).width() > 320 &&
        n.is(":hidden") &&
        (n.removeAttr("style"), e(".main-nav li a").removeClass("mobile"));
    }),
    e(".main-nav li a").on("click", function () {
      e(this).hasClass("mobile") &&
        (n.slideToggle(), e(".toggle-mobile-but").toggleClass("active"));
    }),
    e(".background-img").each(function () {
      var i = e(this)
        .children("img")
        .attr("src");
      e(this)
        .css("background-image", 'url("' + i + '")')
        .css("background-position", "initial");
    }),
    $('.gallery').each(function () {
      $(this).magnificPopup({
        delegate: 'img',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    });
})(jQuery);