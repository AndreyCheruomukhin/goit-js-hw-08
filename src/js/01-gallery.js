
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const container = document.querySelector(".gallery");
const murkup = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item" >
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`
);

container.insertAdjacentHTML("beforeend", murkup.join(""));

  let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt"});
  
  
  