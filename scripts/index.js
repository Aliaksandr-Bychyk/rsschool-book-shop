import checkoutItemConstructor from "./checkoutItemConstructor.js";
import jsonReader from "./jsonReader.js";
let html = document.querySelector('html');
if (html.dataset.page == 'index') {
  window.stage = [];
  jsonReader();
} else {
  window.stage = JSON.parse(sessionStorage.getItem('stage'));
  if (window.stage == null ) {
    window.location.href = '/'
  }
  let itemsContainer = document.querySelector('.items-container');
  console.log(window.stage)
  for (let i = 0; i < window.stage.length; i++) {
    let data = window.stage[i]
    itemsContainer.append(checkoutItemConstructor(i+1, data.title, data.author, data.price));
  }
}