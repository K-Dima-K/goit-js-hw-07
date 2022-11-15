import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMurkup = createGalleryItemsMurkup(galleryItems);
const instance = basicLightbox.create(
  `<div class = 'modal'>
  <img></div>`
);

galleryEl.insertAdjacentHTML('beforeend', galleryMurkup);

function createGalleryItemsMurkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join('');
}

function onModalOpen(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  const orirginalImgUrl = e.target.dataset.source;

  instance.element().querySelector('img').src = orirginalImgUrl;
  instance.show();
  instance.element().addEventListener('click', onModalClose);
  window.addEventListener('keydown', onModalCloseByEsc);
}

function onModalClose(e) {
  instance.element().removeEventListener('click', onModalClose);
  instance.close();
}

function onModalCloseByEsc(e) {
  if (!(instance.visible && e.key === 'Escape')) {
    return;
  }
  instance.close();
  window.removeEventListener('keydown', onModalClose);
}

galleryEl.addEventListener('click', onModalOpen);
