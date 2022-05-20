export default function mainRender() {
  
  let docFrag = document.createDocumentFragment();

  let main = document.createElement('main');
  main.append(sectionHeader());
  main.append(sectionCatalog());

  docFrag.append(main);
  docFrag.append(sectionFooter());

  return docFrag;
}

function sectionHeader() {
  let docFrag = document.createDocumentFragment();

  let section = document.createElement('section');
  section.id = 'header';

  let headerImage = document.createElement('div');
  headerImage.classList.add('header-image');
  let headerAbout = document.createElement('div');
  headerAbout.classList.add('header-about');

  let header = document.createElement('header');
  let h1 = document.createElement('h1');
  h1.textContent = 'The Rolling Scopes';
  let h2 = document.createElement('h2');
  h2.textContent = 'School book shop';
  let p = document.createElement('p');
  p.innerHTML = `
    We happy to serve and offer to you the most amazing books!
    <br>
    You can able to look through the catalog, see the description of a particular book, add a book to the bag, choose the appropriate date and address to deliver.
  `
  let a = document.createElement('a');
  a.href = '#catalog';
  a.textContent = 'Browse';

  header.append(h1);
  header.append(h2);
  header.append(p);
  header.append(a);
  headerAbout.append(header);
  section.append(headerImage);
  section.append(headerAbout);

  docFrag.append(section);

  return docFrag;
}

function sectionCatalog() {
  
  let docFrag = document.createDocumentFragment();

  let section = document.createElement('section');
  section.id = 'catalog';

  let catalogContainer = document.createElement('div');
  catalogContainer.classList.add('catalog-container');
  let catalogWrapper = document.createElement('div');
  catalogWrapper.classList.add('wrapper');
  let catalogH2 = document.createElement('h2');
  catalogH2.classList.add('catalog-title');
  catalogH2.textContent = 'Catalog';
  let cardsContainer = document.createElement('div');
  cardsContainer.classList.add('cards-container');

  catalogWrapper.append(catalogH2);
  catalogWrapper.append(cardsContainer);
  catalogContainer.append(catalogWrapper);

  let cartContainer = document.createElement('div');
  cartContainer.classList.add('cart-container');
  let cartWrapper = document.createElement('div');
  cartWrapper.classList.add('wrapper');
  let CartH2 = document.createElement('h2');
  CartH2.classList.add('catalog-title');
  CartH2.textContent = 'Catalog';
  let dropArea = document.createElement('div');
  dropArea.classList.add('drop-area');
  let dropMessage = document.createElement('div');
  dropMessage.classList.add('drop-message');
  let i = document.createElement('i');
  i.classList.add('drop-icon');
  let h2 = document.createElement('h2');
  h2.textContent = 'Drop here';

  dropMessage.append(i);
  dropMessage.append(h2);
  dropArea.append(dropMessage);

  cartWrapper.append(CartH2);
  cartWrapper.append(dropArea);
  cartContainer.append(cartWrapper);

  section.append(catalogContainer);
  section.append(cartContainer);
  docFrag.append(section);

  return docFrag;
}

function sectionFooter() {
  
  let docFrag = document.createDocumentFragment();

  let footer = document.createElement('footer');
  footer.id = 'footer';

  let a1 = document.createElement('a');
  a1.classList.add('gh-link');
  a1.href = 'https://github.com/AlexanderBychyk';
  a1.target = '_'
  a1.textContent = 'Aliaksandr Bychyk';

  let h2 = document.createElement('h2');
  h2.textContent = '2022';

  let a2 = document.createElement('a');
  a2.classList.add('up-link');
  a2.href = '#header';

  footer.append(a1);
  footer.append(h2);
  footer.append(a2);

  docFrag.append(footer);

  return docFrag;
}