import popupConstructor from "./popupConstructor.js";
import stage from "./stage.js";
export default function cardConstructor(author, imgLink, title, price, description) {
  
  let docFrag = document.createDocumentFragment();

  let dropArea = document.querySelector('.drop-area')

  let card = document.createElement('div');
  card.classList.add('card');
  card.draggable = true;

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
  h4.textContent = `Price: $${price}`;

  let buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttons-container')

  let buttonAdd = document.createElement('button')
  buttonAdd.classList.add('btn-add');
  buttonAdd.setAttribute('title', 'Add to bag');
  buttonAdd.textContent = 'ADD TO BAG'
  buttonAdd.addEventListener('click', () => stage(title, author, price, imgLink));

  let buttonRead = document.createElement('button')
  buttonRead.classList.add('btn-read');
  buttonRead.setAttribute('title', 'Read more');
  buttonRead.addEventListener('click', () => popupConstructor(author, title, description, imgLink))

  buttonContainer.append(buttonRead);
  buttonContainer.append(buttonAdd);

  cardInfo.append(h2);
  cardInfo.append(h3);
  cardInfo.append(h4);

  card.append(img);
  card.append(cardInfo);
  card.append(buttonContainer);

  dropArea.addEventListener('dragover', (e) => e.preventDefault());
  card.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('drag', JSON.stringify([title, author, price, imgLink]))
  })
  dropArea.addEventListener('drop', (e) => {
    let drop = JSON.parse(e.dataTransfer.getData('drag'));
    stage(drop[0], drop[1], drop[2], drop[3]);
  })

  docFrag.append(card);
  return docFrag;
}