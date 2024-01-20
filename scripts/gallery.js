var gallery_section = document.getElementById('gallery');

images.forEach(image => {
    var gallery_item = createGalleryItem(image);

    gallery_section.appendChild(gallery_item);
});

// creating gallery item
function createGalleryItem(image) {
    const gallery_item = document.createElement('div');
    gallery_item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = `${gallery_path}${image.file_path}`;
    //img.alt = title;

    const img_title = document.createElement('div');
    img_title.className = 'img_title';
    img_title.innerText = image.title;

    const img_description = document.createElement('div');
    img_description.className = 'img_description'
    img_description.innerText = image.description;

    gallery_item.appendChild(img);
    //gallery_item.appendChild(img_title);
    //gallery_item.appendChild(img_description)
    
    gallery_item.addEventListener("click", () => showOverlay(img.src));


    return gallery_item;
}


