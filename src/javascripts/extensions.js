;(function ($) {
  $.fn.byData = function (dataAttr) {
    return $(this).find("[data-" + dataAttr + "]");
  };

  $.fn.notData = function (dataAttr) {
    return $(this).not("[data-" + dataAttr + "]");
  };

  $.fn.parentsByData = function (dataAttr) {
    return $(this).parents("[data-" + dataAttr + "]");
  };

  $.fn.hasData = function (dataAttr) {
    return $(this).is("[data-" + dataAttr + "]");
  };
})(jQuery);