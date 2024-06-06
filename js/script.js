// Getting Dom Elements
const galleryContainer = document.querySelector('.gallery');

// Hover effect handler functions
const addHoverEffect = (e) => {
  if (e.target.classList.contains('gallery-img')) {
    e.target.closest('.gallery-item').classList.add('hovered');
  }
};

const removeHoverEffect = (e) => {
  if (e.target.classList.contains('gallery-img')) {
    e.target.closest('.gallery-item').classList.remove('hovered');
  }
};

// Adding hover effect by event listener
galleryContainer.addEventListener('mouseover', addHoverEffect);
galleryContainer.addEventListener('mouseout', removeHoverEffect);
