
function findImageIndex(imageSrc) {
    return images.findIndex(image => `${gallery_path}${image.file_path}` === imageSrc);
}

let currentImageIndex = 0;

function showOverlay(data) {
  
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayDescription = document.getElementById("overlay-description");

    
    // check if overlay has navigation -> is it Gallery or just Zooming image
    const hasNavigation = overlay.querySelector('.overlay-nav') !== null;
    if (hasNavigation) { currentImageIndex = findImageIndex(data);}


    overlayImg.src = data;//`${gallery_path}${data.file_path}`;
    //overlayImg.alt = data.title;
    //overlayTitle.innerText = data.title;
    //overlayDescription.innerText = data.description;

    overlay.style.opacity = 1;
    overlay.style.pointerEvents = "auto";

}

function hideOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
}

// hiding overlay on click
document.addEventListener("click", (event) => {
    const overlay = document.getElementById("overlay");

    const isClickInsideOverlay = overlay.contains(event.target);
    const isClickOnImage = event.target.tagName === "IMG";

    if (!isClickInsideOverlay && !isClickOnImage) {
        hideOverlay();
    }
});


// navigation
function navigateOverlay(direction) {
    let nextIndex;
    
    if (direction === 'prev') {
        nextIndex = (currentImageIndex - 1 + images.length) % images.length;
    } else {
        nextIndex = (currentImageIndex + 1) % images.length;
    }

    const nextImageSrc = `${gallery_path}${images[nextIndex].file_path}`;
    showOverlay(nextImageSrc);
}


