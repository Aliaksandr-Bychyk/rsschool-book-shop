export default function popupConstructor(author, title, description, imgLink) {

  let docFrag = document.createDocumentFragment();

  let main = document.querySelector('main');
  let popupBackdrop = document.createElement('div');
  popupBackdrop.classList.add('popup-backdrop');

  let popup = document.createElement('div');
  popup.classList.add('popup');

  let buttonClosePopup = document.createElement('i');
  buttonClosePopup.classList.add('close-popup');

  let img = document.createElement('img');
  img.src = imgLink;
  img.setAttribute('alt', title);

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

  popup.append(buttonClosePopup);
  popup.append(img);
  popup.append(popupContainer);

  popupBackdrop.addEventListener('click', (e) => closePopup())
  buttonClosePopup.addEventListener('click', (e) => closePopup())

  docFrag.append(popupBackdrop);
  docFrag.append(popup);

  main.prepend(docFrag);
  
  function closePopup() {
    popupBackdrop.style.opacity = 0;
    popup.style.opacity = 0;
    setTimeout(() => {
      popupBackdrop.remove()
      popup.remove()
    }, 300);
  }
}