export default function popupConstructor(author, title, description) {

  let main = document.querySelector('main');
  let popupBackdrop = document.createElement('div');
  popupBackdrop.classList.add('popup-backdrop');

  let popup = document.createElement('div');
  popup.classList.add('popup');

  let popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  
  let div = document.createElement('div')

  let h2 = document.createElement('h2');
  h2.textContent = title;

  let h3 = document.createElement('h3');
  h3.textContent = author;

  div.append(h2);
  div.append(h3);

  let p = document.createElement('p');
  p.textContent = description;

  popupContainer.append(div)
  popupContainer.append(p)

  popup.append(popupContainer);

  popupBackdrop.append(popup);

  popupBackdrop.addEventListener('click', (e) => {
    e.target.style.opacity = 0;
    setTimeout(() => e.target.remove(), 300);
  })

  main.prepend(popupBackdrop);
}