'use strict';

window.preloader = (function () {
  var preloader = document.querySelector('.page-preloader');
  setTimeout(function(){
    preloader.style.display = 'none';
  }, 8000)
})();