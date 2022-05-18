export default function totalConstructor(cost) {
  let totalContainer = document.createElement('div');
  totalContainer.classList.add('total-container');

  let hr = document.createElement('hr');

  let totalCostContainer = document.createElement('div');
  totalCostContainer.classList.add('total-cost-container');

  let totalText = document.createElement('span');
  totalText.textContent = 'Total cost:'

  let costText = document.createElement('span');
  costText.textContent = `$${cost}`;

  let button = document.createElement('button');
  button.classList.add('btn-check');
  button.textContent = 'Check out';
  button.addEventListener('click', () => {
    sessionStorage.setItem('stage', JSON.stringify(window.stage));
    window.location.href='/checkout.html';
  });

  totalCostContainer.append(totalText);
  totalCostContainer.append(costText);

  totalContainer.append(hr);
  totalContainer.append(totalCostContainer);
  totalContainer.append(button);

  return totalContainer;
}