
// used for all images paths, titles and descriptions
var gallery_path = "../resources/photogallery/"

var images = [];        // with repeating images (to more fill gallery)
var repeatCount = 14;

var images_sources = [
    {
        title:          "O1 asd fsfs fwfwofe fwaofw",
        file_path:      "Obrázek3.jpg",
        description:    "wwfef wef wf we ",
    },
    {
        title:          "O2",
        file_path:      "Obrázek4.jpg",
        description:    "aekajbbwelf lw ",
    },
    {
        title:          "O3",
        file_path:      "Obrázek5.jpg",
        description:    "akdwjd owef ",
    },
    {
        title:          "O4",
        file_path:      "Obrázek6.jpg",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "Obrázek7.jpg",
        description:    "Abc",
    },
    {
        title:          "O1",
        file_path:      "Obrázek8.jpg",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "Obrázek9.jpg",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "Obrázek10.jpg",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "kindergarden_image.png",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "hackovani_1.png",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "hackovani_2.png",
        description:    "",
    },
    {
        title:          "O1",
        file_path:      "hackovani_3.png",
        description:    "",
    },
]

for (let i = 0; i < repeatCount; i++) {
    images_sources.forEach(image => {
        images.push({ ...image });
    });
}
