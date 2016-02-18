;(function() {
  "use strict";

  var Q = function(selector) {
    return new Libs(selector);
  }

  var Libs = function(selector) {
    if (!selector) {
      return this;
    }

    if (typeof selector === "string") {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++) {
        this[i] = elements[i];
      }
      this.length = elements.length;
    }
    
    return this;
  }

  Libs.prototype = {

    addClass: function(className) {
      if (typeof className === "undefined") {
        return this;
      }
      var classes = className.split(" ");
      for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < classes.length; j++) {
          this[i].classList.add(classes[j]);
        }
      }
      return this;
    },

    removeClass: function(className) {
      var classes = className.split(" ");      
      for (var i = 0; i < this.length; i++) {
        for (var j = 0; j < classes.length; j++) {
          this[i].classList.remove(classes[j]);
        }
      }
      return this;
    },

    width: function(value) {
      if (arguments.length > 0) {
        for (var i = 0; i < this.length; i++) {
          this[i].style.width = value + "px";
        }
        return this;
      }
      else {
        return this[0].clientWidth;
      }
    }
  }

  window.Q = Q;
})();