import checkoutItemConstructor from "./checkoutItemConstructor.js";
import checkoutRender from "./checkoutRender.js";
import jsonReader from "./jsonReader.js";
import mainRender from "./mainRender.js";
let html = document.querySelector('html');
if (html.dataset.page == 'main') {
  document.body.append(mainRender());
  window.stage = [];
  jsonReader();
} else {
  document.body.append(checkoutRender());
  window.stage = JSON.parse(sessionStorage.getItem('stage'));
  if (window.stage == null ) {
    window.location.href = './'
  }
  let itemsContainer = document.querySelector('.items-container');
  let totalCost = 0;
  for (let i = 0; i < window.stage.length; i++) {
    let data = window.stage[i]
    totalCost += data.price;
    itemsContainer.append(checkoutItemConstructor(i+1, data.title, data.author, data.price));
  }
  document.querySelector('.total-cost').textContent = `$${totalCost}`;
}