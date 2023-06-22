import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryItemsMap = galleryItems
	.map((item) => {
		galleryList.insertAdjacentHTML(
		"beforeend",
		`<div class="gallery__item">
		<a class="gallery__link" href="${item.original}">
      	<img 
      	class="gallery__image"
      	src="${item.preview}"
      	alt="${item.description}"
      	/>
      	</a>
      	</div`
		);
	})
	.join("");

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});