import galleryTemplate from '../templates/gallery-item.hbs';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

console.log(galleryRef);
console.log(galleryItems);
console.log(galleryTemplate(galleryItems));

galleryRef.insertAdjacentHTML('beforeend', galleryTemplate(galleryItems));

// import SimpleLightbox from 'simplelightbox';

// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionClass: 'custom-caption',
// });
