;(function () {
  function slider(element, options) {
    var slideContainer = element.getElementsByClassName("slides")[0];
    var slides = slideContainer.getElementsByTagName("img");

    var widthWrapper = element.clientWidth;
    slideContainer.style.width = widthWrapper*slides.length + "px";
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.width = widthWrapper + "px";
    }
    slideContainer.style.marginLeft = 0;
    setInterval(function () {
      var marginLeft = parseInt(slideContainer.style.marginLeft);
      if (marginLeft < -(widthWrapper*slides.length - 2*widthWrapper)) {
        slideContainer.style.marginLeft = 0;
      }
      else {
        var left = marginLeft - widthWrapper;
        slideContainer.style.marginLeft = left + "px";
      }
    },2000)
  }

  window.makeSlider = slider;
})();

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementsByClassName("slider-wrapper")[0];
  makeSlider(slider,{});
});
