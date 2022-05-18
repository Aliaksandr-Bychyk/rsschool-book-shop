import updateCart from './updateCart.js';
export default function cartCardCounstructor(author, imgLink, title, price) {
  
  let card = document.createElement('div');
  card.classList.add('cart-card');

  let deleteArea = document.createElement('div');
  deleteArea.classList.add('delete-area');
  deleteArea.setAttribute('title', 'Delete item');
  deleteArea.addEventListener('click', () => {
    for (let i = 0; i < window.stage.length; i++) {
      let data = window.stage[i];
      if (data.title == title) {
        delete window.stage[i];
      }
    }
    window.stage = window.stage.filter(n => n);
    updateCart();
  })

  let img = document.createElement('img');
  img.setAttribute('src', imgLink);
  img.setAttribute('alt', title);

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('cart-card-info');

  let h2 = document.createElement('h2');
  h2.textContent = title;

  let h3 = document.createElement('h3');
  h3.textContent = author;

  let h4 = document.createElement('h4');
  h4.textContent = `Price: $${price}`;

  cardInfo.append(h2);
  cardInfo.append(h3);
  cardInfo.append(h4);

  card.append(deleteArea);
  card.append(img);
  card.append(cardInfo);

  return card;

}