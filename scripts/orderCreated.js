export default function orderCreated(street, house, flat, name, surname) {
  
  let docFrag = document.createDocumentFragment();

  let submitedMessage = document.createElement('div');
  submitedMessage.classList.add('submited-message');

  let icon = document.createElement('i');
  icon.classList.add('icon-submited');

  let h1 = document.createElement('h1');
  h1.textContent = 'The order created';

  let span = document.createElement('span');
  span.textContent = `The delivery address is ${street} street house ${house} flat ${flat}. Customer ${name} ${surname}.`

  let button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('--submit');
  button.textContent = 'Go back';
  button.addEventListener('click', () => window.location.href = './');

  submitedMessage.append(icon);
  submitedMessage.append(h1);
  submitedMessage.append(span);
  submitedMessage.append(button);

  docFrag.append(submitedMessage);

  return docFrag;
}