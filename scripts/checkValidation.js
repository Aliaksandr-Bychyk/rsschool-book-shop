export default function checkValidation() {

  let giftsOptionsChecked = document.querySelectorAll('.input-option:checked');
  let giftsOptionsUnchecked = document.querySelectorAll('.input-option:not(:checked)');
  if (giftsOptionsChecked.length == 2) {
    giftsOptionsUnchecked.forEach(v => v.disabled = true)
  } else {
    giftsOptionsUnchecked.forEach(v => v.disabled = false)
  }

  let inputValid = document.querySelectorAll('input.validate:valid');
  let buttonSubmit = document.querySelector('.btn.--submit');
  if (inputValid.length == 6) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}