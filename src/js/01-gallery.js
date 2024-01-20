//Exercițiul 1 - librăria SimpleLightbox
//Exercițiul 1 - librăria SimpleLightbox
//Îndeplinește acest task în fișierele 01-gallery.html și 01-gallery.js. Împarte-l în mai multe subtask-uri:

//Adăugați librăria SimpleLightbox ca dependență de proiect, folosind npm (link-urile CDN nu mai sunt necesare).
//Folosiți codul JavaScript de la tema anterioară, dar refactorizat. Asigurați-vă că librăria a fost instalată prin npm (sintaxa import/export).
//Pentru a conecta codul CSS la proiect, trebuie să adăugați încă un import pe lângă cel descris în documentație.

// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line



const galleryContainer = document.querySelector(".gallery");
const createGallaryItems = galleryItems
  .map(({ original, preview, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
      </a>
    </li>`
  ).join("");

galleryContainer.insertAdjacentHTML('beforeend', createGallaryItems);

const galleryHandler = new SimpleLightbox('ul.gallery a', { 
  captionsData: 'alt',
  captionDelay: 250
});
galleryHandler.on("show.simplelightbox");