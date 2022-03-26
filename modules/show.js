const homeContainer = document.querySelector('.home-container');
const listContainer = document.querySelector('.list-container');
const addContainer = document.querySelector('.add-container');
const contactContainer = document.querySelector('.contact-container');

export default function show(name) {
  switch (name) {
    case 'home':
      homeContainer.style.display = 'block';
      listContainer.style.display = 'none';
      addContainer.style.display = 'none';
      contactContainer.style.display = 'none';
      break;

    case 'list':
      homeContainer.style.display = 'none';
      listContainer.style.display = 'flex';
      addContainer.style.display = 'none';
      contactContainer.style.display = 'none';
      break;

    case 'add':
      homeContainer.style.display = 'none';
      listContainer.style.display = 'none';
      addContainer.style.display = 'flex';
      contactContainer.style.display = 'none';
      break;

    case 'contact':
      homeContainer.style.display = 'none';
      listContainer.style.display = 'none';
      addContainer.style.display = 'none';
      contactContainer.style.display = 'flex';
      break;
    default:
      homeContainer.style.display = 'none';
      listContainer.style.display = 'none';
      addContainer.style.display = 'none';
      contactContainer.style.display = 'flex';
      break;
  }
}
