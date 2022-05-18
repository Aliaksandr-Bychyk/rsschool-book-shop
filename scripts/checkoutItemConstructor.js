export default function checkoutItemConstructor(index, title, author, price) {
  let item = document.createElement('div');
  item.classList.add('item');

  let span = document.createElement('span')
  span.textContent = index;
  let h2 = document.createElement('h2')
  h2.textContent = title;
  let h3 = document.createElement('h3')
  h3.textContent = author;
  let h4 = document.createElement('h4')
  h4.textContent = `$${price}`;


  item.append(span)
  item.append(h2)
  item.append(h3)
  item.append(h4)

  return item;
}