"use strict";

function p2_1() { 
  for (var t = "#"; t.length < 8; t+="#") console.log(t);
}

function p2_2() {
  for (var i = 1; i <= 100; i++) {
    var res = "";
    if (i % 3 === 0) res += "Fizz";
    if (i % 5 === 0) res += "Buzz";
    console.log(res || i);
  }
}

function p2_3(size) {
  var s = "";
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if ((i + j) % 2) s += "#";
      else s += " ";
    }
    s += "\n"
  }
  console.log(s);
}

function p3_1(a,b) {
  return a > b ? b : a;
}

function p3_2(n) {
  if (n < 0) return p3_2(-n);
  if (n === 0) return true;
  else if (n === 1) return false;
  return p3_2(n-2);
}

function p3_3(a,b) {
  var count = (function() {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
      if(a[i] === b) c++;
    }
    return c;
  })();
  return count;
}

function p4_1() {
  
  return {
    range: function(begin, end, step) {
      var arr = [];
      for (var i = begin; i <= end; i += step) arr.push(i);
        return arr;
    },
    sum: function(arr) {
      var s = 0;
      for (var i = 0; i < arr.length; i++) s += arr[i];
      return s;
    }
  }
}

function p4_2() {
  return {
    reverseArray: function(arr) {
      var arr_t = [];
      for (var i = 0; i < arr.length; i++) {
        arr_t.push(arr[arr.length - 1 - i]);
      }
      return arr_t;
    },
    reverseArrayInPlace: function(arr) {
      for (var i = 0; i < Math.floor(arr.length/2); i++) {
        var old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
      }
    }
  }
}

function p5_1() {
  var arr = [[1,2,3],[4,5],[6,7,8,9,0]];
  var result = arr.reduce(function(ar,current_arr) {
    return ar.concat(current_arr);
  });
  return result;
}

function Vector(x,y) {
  this.x = x;
  this.y = y;
  this.plus = function(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
})

var vec = new Vector(1,2);
console.log(vec.length);
vec.x = 3;
console.log(vec.length);
console.log(vec.plus(new Vector(3,4)));
