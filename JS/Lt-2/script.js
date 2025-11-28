// Array of image URLs 
const images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/View_from_behind_Hollywood_Sign_overlooking_LA.jpg/1200px-View_from_behind_Hollywood_Sign_overlooking_LA.jpg",
  "https://res.cloudinary.com/simpleview/image/upload/v1634594204/clients/denton/Masker_Courthouse_Photo_ba041760-9318-4c9f-b3bd-6fc32b5bcc9a.png",
  "https://media.vrbo.com/lodging/116000000/115020000/115018600/115018587/db2882ce.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
  "https://media-cdn.tripadvisor.com/media/photo-s/0a/d2/1c/00/our-main-house.jpg"
];

const bannerImage = document.getElementById("bannerImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(index) {
  bannerImage.src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

setInterval(nextImage, 3000);

