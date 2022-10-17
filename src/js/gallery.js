// import IframeLightbox from 'iframe-lightbox';

const iframesRef = document.querySelectorAll('.gallery__iframe');

// iframesRef.forEach(element => {
//   element.lightbox = new IframeLightbox(element);
// });

import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'custom-caption',
});
