'use strict';

window.formValidation = (function () {
  var form = document.querySelector('.form');
  var formBtn = document.querySelector('.page__button');
  var nameInput = form.querySelector('.form-input--name');
  var phoneInput = form.querySelector('.form-input--phone');
  var mailInput = form.querySelector('.form-input--mail');
  var formState = {
    nameInput: false,
    phoneInput: false,
    mailInput: false
  }

  function validateName(inputField) {

    var userInput = inputField.value.split(' ').filter(function(item) { return item.length  > 0});
    console.log(userInput);
    return userInput.length < 2;
  }

  function validatePhone(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(inputtxt.value.match(phoneno)) {
      return true;
    }
    else {
      return false;
    }
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function checkFormValidity() {
    if (formState.nameInput && formState.phoneInput && formState.mailInput) {
      formBtn.disabled = false;
      formBtn.classList.add('page__button--active');
    } else {
      formBtn.disabled = true;
      formBtn.classList.remove('page__button--active');
    }
  }

  function ouputFormData() {
    alert('Сообщение отправлено в консоль')
    console.log('Имя: ' + nameInput.value + ' Телефон: ' + phoneInput.value + ' E-mail: ' + mailInput.value);
  }


  form.addEventListener('blur', function(evt) {
    var target = evt.target;
    if (target.classList.contains('form-input--name')) {
      if(validateName(target)) {
        target.classList.add('error');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'block';
      } else {
        target.classList.add('valid');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'none';
        formState.nameInput = true;
        checkFormValidity();
      }
    }

    if (target.classList.contains('form-input--phone')) {

      if (!validatePhone(target)) {
        target.classList.add('error');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'block';
      } else {
        target.classList.add('valid');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'none';
        formState.phoneInput = true;
        checkFormValidity();
      }
    }

    if (target.classList.contains('form-input--mail')) {

      if (!validateEmail(target.value)) {
        target.classList.add('error');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'block';
      } else {
        target.classList.add('valid');
        target.offsetParent.querySelector('.input-error-msg').style.display = 'none';
        formState.mailInput = true;
        checkFormValidity();
      }
    }
  }, true);
  form.addEventListener('focus', function(evt){
    evt.target.offsetParent.querySelector('.input-descr-msg').style.display = 'block';
  },true);
  formBtn.addEventListener('click', ouputFormData);
})();