import checkValidation from "./checkValidation.js";
import orderCreated from "./orderCreated.js";

export default function checkoutRender() {
  document.body.id = "checkout";
  let main = document.createElement('main');
  
  let payment = document.createElement('div');
  payment.classList.add('payment')

  let paymentContainer = document.createElement('div');
  paymentContainer.classList.add('payment-container')

  let logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container')
  let paymentIcon = document.createElement('i');
  paymentIcon.classList.add('payment-icon')
  let logoH1 = document.createElement('h1');
  logoH1.textContent = 'RS Payment'

  let itemsContainer = document.createElement('div');
  itemsContainer.classList.add('items-container')

  let checkoutTitle = document.createElement('div');
  checkoutTitle.classList.add('checkout-title')
  let checkoutTitleSpan = document.createElement('span');
  checkoutTitleSpan.textContent = 'Delivety';

  let payButtonContainer = document.createElement('div');
  payButtonContainer.classList.add('pay-button-container');
  let buttonCancel = document.createElement('button');
  buttonCancel.classList.add('btn', '--cancel');
  buttonCancel.textContent = 'Cancel order';
  buttonCancel.addEventListener('click', () => document.location.href = '/')

  let buttonSubmit = document.createElement('button');
  buttonSubmit.classList.add('btn', '--submit');
  buttonSubmit.textContent = 'Submit order';
  buttonSubmit.disabled = true;
  buttonSubmit.addEventListener('click', () => submitOrder());


  logoContainer.append(paymentIcon);
  logoContainer.append(logoH1);

  paymentContainer.append(logoContainer);
  paymentContainer.append(itemsContainer);

  checkoutTitle.append(checkoutTitleSpan);
  paymentContainer.append(checkoutTitle);

  paymentContainer.append(renderForm());

  payButtonContainer.append(buttonCancel);
  payButtonContainer.append(buttonSubmit);
  paymentContainer.append(payButtonContainer);


  payment.append(paymentContainer)
  main.append(payment)

  return main
} 

function renderForm() {
  let form = document.createElement('form');
  form.classList.add('delivery-container');
  form.id = 'delivery-form';

  form.append(renderInputName());
  form.append(renderInputSurname());
  form.append(renderInputDate());
  form.append(renderInputStreet());
  form.append(renderInputHouse());
  form.append(renderInputFlat());
  form.append(renderInputGift());
  form.append(renderInputPayment());
  form.append(renderInputCost());

  return form;
}

function renderInputName() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-name');
  label.textContent = 'Name:'

  let input = document.createElement('input');
  input.id = 'input-name';
  input.pattern = '[A-Za-z]{4,}';
  input.required = true;
  input.classList.add('validate');
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputSurname() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-surname');
  label.textContent = 'Surname:'

  let input = document.createElement('input');
  input.id = 'input-surname';
  input.pattern = '[A-Za-z]{5,}';
  input.required = true;
  input.classList.add('validate')
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputDate() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-date');
  label.textContent = 'Delivery date:'

  let input = document.createElement('input');
  input.type = 'date';
  input.id = 'input-date';
  let date = new Date()
  date.setDate(date.getDate()+1);
  let patternDate = [date.getFullYear(), ('0' + (date.getMonth() + 1)).slice(-2), date.getDate()].join('-')
  input.min = patternDate;
  input.required = true;
  input.classList.add('validate')
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputStreet() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-street');
  label.textContent = 'Street:'

  let input = document.createElement('input');
  input.id = 'input-street';
  input.minLength = '5';
  input.required = true;
  input.classList.add('validate')
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputHouse() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-house');
  label.textContent = 'House number:'

  let input = document.createElement('input');
  input.id = 'input-house';
  input.pattern = '^\\d+$';
  input.required = true;
  input.classList.add('validate')
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputFlat() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('label');
  label.id = 'label-required';
  label.setAttribute('for', 'input-flat');
  label.textContent = 'Flat number:'

  let input = document.createElement('input');
  input.id = 'input-flat';
  input.pattern = '^(\\d+-?)+\\d+$';
  input.required = true;
  input.classList.add('validate')
  input.autocomplete = 'off';
  input.addEventListener('input', () => checkValidation());

  let validationError = document.createElement('span')
  validationError.classList.add('validation-error');
  validationError.textContent = 'The field is invalid';

  inputBlock.append(label);
  inputBlock.append(input);
  inputBlock.append(validationError);
  return inputBlock;
}

function renderInputGift() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('span');
  label.id = 'label-cost';
  label.textContent = 'Choose 2 gifts (optional):'

  let divOne = document.createElement('div');
  let inputOne = document.createElement('input');
  inputOne.classList.add('input-option')
  inputOne.type = 'checkbox';
  inputOne.id = 'input-gift';
  inputOne.name = 'gift';
  inputOne.value = 'gift';
  inputOne.addEventListener('input', () => checkValidation());
  let labelOne = document.createElement('label');
  labelOne.setAttribute('for', 'input-gift');
  labelOne.textContent = 'Pack as a gift';
  divOne.append(inputOne);
  divOne.append(labelOne);

  let divTwo = document.createElement('div');
  let inputTwo = document.createElement('input');
  inputTwo.classList.add('input-option')
  inputTwo.type = 'checkbox';
  inputTwo.id = 'input-postcard';
  inputTwo.name = 'gift';
  inputTwo.value = 'postcard'
  inputTwo.addEventListener('input', () => checkValidation());
  let labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', 'input-postcard');
  labelTwo.textContent = 'Add postcard';
  divTwo.append(inputTwo);
  divTwo.append(labelTwo);

  let divThree = document.createElement('div');
  let inputThree = document.createElement('input');
  inputThree.classList.add('input-option')
  inputThree.type = 'checkbox';
  inputThree.id = 'input-discount';
  inputThree.name = 'gift';
  inputThree.value = 'discount'
  inputThree.addEventListener('input', () => checkValidation());
  let labelThree = document.createElement('label');
  labelThree.setAttribute('for', 'input-discount');
  labelThree.textContent = '2% discount to the next time';
  divThree.append(inputThree);
  divThree.append(labelThree);

  let divFour = document.createElement('div');
  let inputFour = document.createElement('input');
  inputFour.classList.add('input-option')
  inputFour.type = 'checkbox';
  inputFour.id = 'input-pen';
  inputFour.name = 'gift';
  inputFour.value = 'pen'
  inputFour.addEventListener('input', () => checkValidation());
  let labelFour = document.createElement('label');
  labelFour.setAttribute('for', 'input-pen');
  labelFour.textContent = 'Branded pen or pencil';
  divFour.append(inputFour);
  divFour.append(labelFour);

  inputBlock.append(label);
  inputBlock.append(divOne);
  inputBlock.append(divTwo);
  inputBlock.append(divThree);
  inputBlock.append(divFour);

  return inputBlock;
}

function renderInputPayment() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('span');
  label.id = 'label-required';
  label.textContent = 'Payment type:'

  let divOne = document.createElement('div');
  let inputOne = document.createElement('input');
  inputOne.classList.add('input-pay-option')
  inputOne.type = 'radio';
  inputOne.id = 'input-cash';
  inputOne.name = 'pay';
  inputOne.value = 'Cash';
  inputOne.checked = true;
  inputOne.addEventListener('input', () => checkValidation());
  let labelOne = document.createElement('label');
  labelOne.setAttribute('for', 'input-cash');
  labelOne.textContent = 'Cash';
  divOne.append(inputOne);
  divOne.append(labelOne);

  let divTwo = document.createElement('div');
  let inputTwo = document.createElement('input');
  inputTwo.classList.add('input-pay-option')
  inputTwo.type = 'radio';
  inputTwo.id = 'input-card';
  inputTwo.name = 'pay';
  inputTwo.value = 'Card'
  inputTwo.addEventListener('input', () => checkValidation());
  let labelTwo = document.createElement('label');
  labelTwo.setAttribute('for', 'input-card');
  labelTwo.textContent = 'Card (Visa, MasterCard)';
  divTwo.append(inputTwo);
  divTwo.append(labelTwo);

  inputBlock.append(label);
  inputBlock.append(divOne);
  inputBlock.append(divTwo);

  return inputBlock;
}

function renderInputCost() {
  let inputBlock = document.createElement('div');
  inputBlock.classList.add('input-block');
  
  let label = document.createElement('span');
  label.id = 'label-cost';
  label.textContent = 'Total cost:';

  let input = document.createElement('span');
  input.classList.add('total-cost');

  inputBlock.append(label);
  inputBlock.append(input);
  return inputBlock;
}

function submitOrder() {
  let paymentContainer = document.querySelector('.payment-container');
  let street = document.querySelector('#input-street').value;
  let house = document.querySelector('#input-house').value;
  let flat = document.querySelector('#input-flat').value;
  let firstname = document.querySelector('#input-name').value;
  let surname = document.querySelector('#input-surname').value;
  paymentContainer.innerHTML = '';
  paymentContainer.append(orderCreated(street, house, flat, firstname, surname))
}