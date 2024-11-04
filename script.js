// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Gallery functionality
const images = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
];

let currentIndex = 0;
const galleryContainer = document.getElementById('gallery-container');

// Load initial images
function loadGallery() {
    galleryContainer.innerHTML = '';
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        img.className = 'w-full h-[600px] object-cover flex-shrink-0';
        galleryContainer.appendChild(img);
    });
    updateGalleryPosition();
}

function updateGalleryPosition() {
    galleryContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGalleryPosition();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryPosition();
    }
}

// Modal functionality
function showModal(hobby) {
    if (hobby === 'photography') {
        loadGallery();
    }
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});