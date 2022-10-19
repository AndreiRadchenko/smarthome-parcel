import galleryTemplate from '../templates/gallery-item.hbs';
import { galleryItems } from './gallery-items';
import refs from './doc-refs.js';
import { spinerPlay, spinerStop } from './spinner';

const VIDEO_STUB = 'images/gallery/preview/toilet-480.webp';

refs.gallery.insertAdjacentHTML('beforeend', galleryTemplate(galleryItems));
refs.gallery.addEventListener('click', onGalleryClick);
refs.galleryModalCloseBtn.addEventListener('click', onGalleryModalClose);
refs.galleryBackdrop.addEventListener('click', onBackdropClick);

function onGalleryClick(event) {
  const videoTitle = event.target.getAttribute('alt');
  const videoItem = galleryItems.find(element => element.title === videoTitle);
  refs.modalIframe.src = videoItem.src;
  spinerPlay();
}

function onGalleryModalClose(event) {
  stopYouTubeVideos();
  // refs.modalIframe.contentWindow.postMessage(
  //   JSON.stringify({ event: 'command', func: 'stopVideo' }),
  //   '*'
  // );
  refs.galleryBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  document.removeEventListener('keydown', onEscapeKeyDown);
}

function onBackdropClick(event) {
  if (event.target === refs.galleryBackdrop) {
    onGalleryModalClose(event);
  }
}

function onEscapeKeyDown(event) {
  if (event.code !== 'Escape') {
    return;
  }
  onGalleryModalClose(event);
}

refs.modalIframe.onload = function () {
  if (refs.modalIframe.src.endsWith('480.webp')) {
    return;
  }
  spinerStop();
  refs.galleryBackdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('modal-open');
  document.addEventListener('keydown', onEscapeKeyDown);
};

function stopYouTubeVideos() {
  // const videoSrc = refs.modalIframe.src;
  refs.modalIframe.src = VIDEO_STUB;
}
