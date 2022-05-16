export default function cardConstructor(author, imgLink, title, price, description) {
  
  let card = document.createElement('div');
  card.classList.add('card');

  let dragArea = document.createElement('div');
  dragArea.classList.add('drag-area');
  dragArea.setAttribute('title', 'Drag here');

  let img = document.createElement('img');
  img.setAttribute('src', imgLink);
  img.setAttribute('alt', title);

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let h2 = document.createElement('h2');
  h2.textContent = title;

  let h3 = document.createElement('h3');
  h3.textContent = author;

  let h4 = document.createElement('h4');
  h4.textContent = `$${price}`;

  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttons-container')

  let buttonAdd = document.createElement('button')
  buttonAdd.classList.add('btn-add');
  buttonAdd.setAttribute('title', 'Add to cart');
  buttonAdd.textContent = 'ADD TO CART'

  let buttonRead = document.createElement('button')
  buttonRead.classList.add('btn-read');
  buttonRead.setAttribute('title', 'Read more');

  buttonContainer.append(buttonAdd);
  buttonContainer.append(buttonRead);

  cardInfo.append(h2);
  cardInfo.append(h3);
  cardInfo.append(h4);
  cardInfo.append(buttonContainer);

  card.append(dragArea);
  card.append(img);
  card.append(cardInfo);

  return card;

}