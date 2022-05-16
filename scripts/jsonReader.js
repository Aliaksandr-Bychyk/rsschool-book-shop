import cardConstructor from "./cardConsturctor.js"

export default function jsonReader() {
  let cardsContainer = document.querySelector('.cards-container');
  fetch('./assets/books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
      data.forEach(el => {
        cardsContainer.append(cardConstructor(el.author, el.imageLink, el.title,
                              el.price, el.description));
      })
    });
}
