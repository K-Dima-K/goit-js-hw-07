import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMurkup = createGalleryItemsMurkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMurkup);

function createGalleryItemsMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li>  
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>
`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
