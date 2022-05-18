import updateCart from './updateCart.js'
export default function stage(author, title, price, imgLink) {
  if (window.stage.length > 0) {
    for (let i = 0; i < window.stage.length; i++) {
      if (window.stage[i].title == title) {
        updateCart();
        return
      }
    }
  } 
  let obj = {
    'author': author,
    'title': title,
    'price': price,
    'imgLink': imgLink,
  }
  window.stage.push(obj)
  updateCart();
  return
}