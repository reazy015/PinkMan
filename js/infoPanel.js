'use strict';

window.infoPanel = (function () {
  var aboutPanel = document.querySelector('.about-panel');
  var panelItemsList = aboutPanel.querySelectorAll('.about-panel-item');
  var infoBlocksList = document.querySelectorAll('.about-info-blocks-item');

  function hideAllInfoBlocks() {
    for (var i = 0; i < infoBlocksList.length; i++) {
      infoBlocksList[i].classList.remove('about-info-blocks-item--active');
    }
  }

  function showAppropriateInfoBlock(target) {
    for (var i = 0; i < infoBlocksList.length; i++) {
      if (infoBlocksList[i].dataset.target === target) {
        hideAllInfoBlocks();
        infoBlocksList[i].classList.add('about-info-blocks-item--active');
      }
    }
  }

  for (var i = 0; i < panelItemsList.length; i++) {
    panelItemsList[i].addEventListener('click', function() {
      showAppropriateInfoBlock(this.dataset.target);
    });
  }


})();