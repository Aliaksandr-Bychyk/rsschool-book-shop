export default function stage(author, title, description) {
  if (window.stage.length > 0) {
    for (let i = 0; i < window.stage.length; i++) {
      if (window.stage[i].title == title) {
        window.stage[i].count++;
        return
      }
    }
  } 
  let obj = {
    'author': author,
    'title': title,
    'description': description,
    'count': 1 
  }
  window.stage.push(obj)
  return
}