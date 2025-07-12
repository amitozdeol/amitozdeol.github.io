function loadComponent(selector, file) {
  return fetch(file) // Return the fetch Promise
    .then((response) => {
      if (!response.ok) throw new Error(`Failed to load ${file}`);
      return response.text();
    })
    .then((html) => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch((error) => console.error(error));
}

// Load components for the new design
loadComponent("#header", "header.html");
const galleryLoadPromise = loadComponent("#gallery", "gallery.html"); // Store the Promise
loadComponent("#modal", "modal.html");
loadComponent("#footer", "footer.html");

const paintings = {
  painting1: [
    "https://picsum.photos/seed/200/400?random=1",
    "https://picsum.photos/seed/200/400?random=2",
  ],
  painting2: [
    "https://picsum.photos/seed/400/100?random=1",
    "https://picsum.photos/seed/400/100?random=2",
  ],
  painting3: [
    "https://picsum.photos/seed/500/300?random=1",
    "https://picsum.photos/seed/500/300?random=2",
  ],
  painting4: [
    "https://picsum.photos/seed/300/500?random=1",
    "https://picsum.photos/seed/300/500?random=2",
  ],
  painting5: [
    "https://picsum.photos/seed/400/400?random=1",
    "https://picsum.photos/seed/400/400?random=2",
  ],
  painting6: [
    "https://picsum.photos/seed/300/600?random=1",
    "https://picsum.photos/seed/300/600?random=2",
  ],
};

let currentPainting = null;
let currentIndex = 0;

function openModal(paintingId) {
  currentPainting = paintings[paintingId];
  currentIndex = 0;
  document.getElementById("modalImage").src = currentPainting[currentIndex];
  document.getElementById("paintingModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("paintingModal").classList.add("hidden");
}

function prevImage() {
  if (currentPainting && currentIndex > 0) {
    currentIndex--;
    document.getElementById("modalImage").src = currentPainting[currentIndex];
  }
}

function nextImage() {
  if (currentPainting && currentIndex < currentPainting.length - 1) {
    currentIndex++;
    document.getElementById("modalImage").src = currentPainting[currentIndex];
  }
}

// Wait for gallery.html to load before populating the gallery
galleryLoadPromise.then(() => {
  const imagesFolder = "./images/"; // Ensure the path is correct
  const images = [
    "Silent_Peaks-24x36.jpg",
    "Urban_Pulse-36x48.jpg",
    "woman_with_pots-30x40.jpg",
    "woman_in_sari-30x40.jpg",
    "village_life-30x40.jpg",
    "Thread_Of_Time-30x40.jpg",
    "surreal_seashell-30x40.jpg",
    "running_white_horses-30x40.jpg",
    "roman_woman_with_fruit-30x40.jpg",
    "riverside_temple-30x40.jpg",
    "nude_piper-30x40.jpg",
    "man_in_traditional_wear-30x40.jpg",
    "man_blowing_conch-30x40.jpg",
    "horse_portrait-30x40.jpg",
    "colorful_abstract-30x40.jpg",
    "coastal_sunset-30x40.jpg",
    "blooming_sunflower-30x40.jpg",
    "abstract_lines-30x40.jpg",
  ];

  const gallery = document.getElementById("gallery-inner");

  if (!gallery) {
    console.error("Gallery container not found!");
    return;
  }

  images.forEach((image) => {
    const [name, size] = image.replace(".jpg", "").split("-");
    const paintingName = name.replace(/_/g, " "); // Replace underscores with spaces

    const galleryItem = `
      <div class="break-inside-avoid relative bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onclick="openModal('${image}')">
          <img src="${imagesFolder}${image}" alt="${paintingName}" class="w-full h-auto object-cover" onerror="handleImageError(this)">
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
              <h3 class="text-lg font-bold mb-1">${paintingName}</h3>
              <p class="text-sm italic">Size: ${size}</p>
          </div>
      </div>
    `;

    gallery.innerHTML += galleryItem;
  });

  // Add a fallback image for broken or missing images
  function handleImageError(img) {
    console.error(`Failed to load image: ${img.src}`);
  }
});
