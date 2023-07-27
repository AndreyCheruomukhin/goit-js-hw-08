
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
container.addEventListener("click", onClick);
function onClick(event) {
  event.preventDefault();

  if (event.target.tagName !== 'IMG') {
    return;
  }

  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
      // Do something…
  });
  
  gallery.on('error.simplelightbox', function (closeModal) {
      console.log(e); // Some usefull information
  });
    instance.show();
    
        function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
            instance.close();
    }
      
    }
   
console.log(galleryItems);
