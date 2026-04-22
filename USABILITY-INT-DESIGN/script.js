// dropdown menu
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// open story map
 document.getElementById('openMapBtn').addEventListener('click', () => {
  window.open(
    'https://uploads.knightlab.com/storymapjs/46c00b809c4314bd52d681a0a98917b2/map-test-2/index.html',
    '_blank'
  );
});

// scroll to detail section
 document.getElementById('exploreBtn').addEventListener('click', () => {
  document.getElementById('detail-section').scrollIntoView({
    behavior: 'smooth'
  });
});

// no more history section or video modal needed

// open map from homepage button
