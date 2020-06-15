/* Include this file at the bottom of your webpage, AFTER the elements you wish the modal to run on, so it runs only after the DOM elements have loaded 
 * ex: <script src="yourfolder/gallery-modal-scripts.js"></script>
 *
 */
const imageGalleryModal = (function() {
	//gallery is closed by default, and so no valid image index is available
	let currentImageIndex = -1;

	//listen for user clicks on the modal buttons
	document.querySelector('.modal-close-button').addEventListener('click', () => closeGalleryModal());
	document.querySelector('.modal-prev-button').addEventListener('click', () => prevGalleryImage());
	document.querySelector('.modal-next-button').addEventListener('click', () => nextGalleryImage());
	
	// not sure if this works with <picture> elements
	document.querySelector('.gallery-modal-ready').addEventListener('click', () => openGalleryModal(event));

	// event listener; lets arrows keys handle gallery navigation and esc close the modal
	document.addEventListener('keyup', function(e) {
	    let allowedKeys = {
	        37: 'left',
	        39: 'right',
	        27: 'esc'
	    };

	    handleInput(allowedKeys[e.keyCode]);
	});

	/* Move this variable down to local function scopes if your webpage dynamically
	 * adds or removes images from the DOM.
	 */
	const galleryImages = document.querySelectorAll('.gallery-modal-ready img');

	//---------- Helper Functions ----------------
	const openGalleryModal = function(e) {
		//end operation if click event target is not an image
		if(e.target.nodeName !== 'IMG') return;
		
		loadGalleryImage(e);
		document.querySelector('.gallery-modal-container').style.display = 'block';
		document.querySelector('.gallery-modal-container').focus();
	};

	const closeGalleryModal = function() {
		document.querySelector('.gallery-modal-container').style.display = 'none';
		removeImageTransition(document.querySelector('#gallery-modal-image'));
		currentImageIndex = -1;
	};

	const prevGalleryImage = function() {
		//if displaying the first image, end operation
		if(currentImageIndex == 0) return;

		currentImageIndex--;
		openGalleryImage();
	};

	const nextGalleryImage = function() {
		//if displaying the last image, end operation
		if(currentImageIndex + 1 ==  galleryImages.length) return;

		currentImageIndex++;
		openGalleryImage();
	};

	//opens an image after it's clicked
	const loadGalleryImage = function(e) {
		let modalImage = document.querySelector('#gallery-modal-image'); 
		modalImage.src = e.target.src;
		addImageTransition(modalImage);

		//iterate through images to find the current image's index (its position in order)
		for(let x = 0; x < galleryImages.length; x++) {
			if(galleryImages.item(x).src == e.target.src) currentImageIndex = x;
		}
		updateImageIndex();
	};

	//opens an image from its index in the list of gallery images
	const openGalleryImage = function() {
		let newImgSrc = galleryImages.item(currentImageIndex).src;
		document.querySelector('#gallery-modal-image').src = newImgSrc;
		updateImageIndex();
	}

	function addImageTransition(element) {
		// element.classList.add('image-fx');
	}

	function removeImageTransition(element) {
		// element.classList.remove('image-fx');
	}

	const handleInput = function(keystroke) {
		if(currentImageIndex == -1) return;
		switch(keystroke) {
			case 'left':
				prevGalleryImage();
				break;
			case 'right':
				nextGalleryImage();
				break;
			case 'esc':
				closeGalleryModal();
				break; 
		}
	}

	//optional function for adjusting modal content to reflect the image index, e.g. displaying 2 / 5 
	const updateImageIndex = function() {
		const imageIndexString = `${currentImageIndex + 1} / ${galleryImages.length}`;
		//console.log(imageIndexString);
		document.querySelector('.gallery-modal-index').innerText = imageIndexString;
	};

	return {
		openGalleryModal: openGalleryModal,
		closeGalleryModal: closeGalleryModal,
		prevGalleryImage: prevGalleryImage,
		nextGalleryImage: nextGalleryImage
	}
}());