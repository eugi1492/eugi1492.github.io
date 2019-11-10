!(function (e) {
  "use strict";
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
      offset: -60
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
    }),
    e(window).resize(function () {
      l();
    });
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
    e(".popup-image").magnificPopup({
      type: "image",
      fixedContentPos: !1,
      fixedBgPos: !1,
      mainClass: "mfp-no-margins mfp-with-zoom",
      image: {
        verticalFit: !0
      },
      zoom: {
        enabled: !0,
        duration: 300
      }
    }),
    e(".popup-video").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1
    });
  e.get(
    "https://wt-3124fd8f88a61e57a4cfca31da4ab788-0.sandbox.auth0-extend.com/ig-photo-eugi",
    function (data) {
      if (data.feeds.length > 0) {
        for (var p in data.feeds) {
          var feed = data.feeds[p];
          console.log(feed.type)
          var htmlFeed =
            "<img style=\"background-image: url('" +
            feed.images.standard_resolution.url +
            '\'" href="' +
            (feed.type == "video" ?
              feed.videos.standard_resolution.url :
              feed.images.standard_resolution.url) +
            '" class="popup-' +
            (feed.type == 'carousel' ? 'image' : feed.type) +
            ' mb-0 square animated">' +
            "</img>";
          e(".feed-container").append(htmlFeed);
        }

        e(".popup-image").magnificPopup({
          type: "image",
          fixedContentPos: !1,
          fixedBgPos: !1,
          mainClass: "mfp-no-margins mfp-with-zoom",
          image: {
            verticalFit: !0
          },
          zoom: {
            enabled: !0,
            duration: 300
          }
        });
        e(".popup-video").magnificPopup({
          type: "iframe",
          mainClass: "mfp-fade",
          removalDelay: 160,
          preloader: !1,
          fixedContentPos: !1
        });
      } else {
        e(".feed-container").append(
          '<p class="col-sm-12">No photos found.</p>'
        );
      }

      // hide loader
      e("#gallery-loader").hide();
    }
  );
})(jQuery);