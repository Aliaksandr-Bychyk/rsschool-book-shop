import cartCardConstructor from './cartCardConstructor.js';
import totalConstructor from './totalConstructor.js'

export default function updateCart() {
  let dropArea = document.querySelector('.drop-area');
  if (window.stage.length > 0) {
    if (!dropArea.classList.contains('--active')) {
      dropArea.classList.add('--active')
    }
    dropArea.innerHTML = '';
    let cost = 0;
    for (let i = 0; i < window.stage.length; i++) {
      let data = window.stage[i];
      cost += data.price;
      dropArea.append(cartCardConstructor(data.author, data.imgLink, data.title, data.price))
    }
    dropArea.append(totalConstructor(cost));
  } else {
    dropArea.classList.remove('--active');
    dropArea.innerHTML = `
    <div class="drop-message">
      <i class="drop-icon"></i>
      <h2>Drop here</h2>
    </div>
    `;
  }
}