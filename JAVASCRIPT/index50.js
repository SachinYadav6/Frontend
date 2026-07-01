// Image Array
let images = [
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
    "https://picsum.photos/200/200?4",
    "https://picsum.photos/200/200?5"
];

let gallery = document.getElementById("gallery");

// Render Images
images.map(function (img) {
    let imageElement = document.createElement("img");
    imageElement.src = img;
    imageElement.width = 150;
    imageElement.height = 150;
    imageElement.style.margin = "10px"; // optional small spacing
    gallery.appendChild(imageElement);
});
