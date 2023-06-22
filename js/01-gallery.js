import { galleryItems } from "./gallery-items.js";
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
      		data-source="${item.original}"
			alt="${item.description}"
			/>
			</a>
			</div`
			);
		})
		.join("");

galleryList.addEventListener("click", (event) => {
	event.preventDefault();
	const esc = (event) => {
		if (event.key === "Escape") instance.close();
	};
	const instance = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`,
		{
			onShow: () => {
				document.addEventListener("keydown", esc);
			},
			onClose: () => {
				document.removeEventListener("keydown", esc);
			},
		}
		);
		instance.show();
	});