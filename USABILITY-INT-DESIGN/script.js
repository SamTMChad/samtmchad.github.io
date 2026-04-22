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

// history toggle
const originalText = 'Located in the heart of campus, Holland-Terrell Library is one of WSU\'s most recognizable academic buildings.';

const historyText = 'Built through multiple expansions over decades, Holland-Terrell has evolved into a major learning hub for generations of Cougs.';

let showingHistory = false;

 document.getElementById('historyBtn').addEventListener('click', () => {
  const text = document.getElementById('libraryText');

  if (!showingHistory) {
    text.textContent = historyText;
  } else {
    text.textContent = originalText;
  }

  showingHistory = !showingHistory;
});

// video modal
const modal = document.getElementById('videoModal');
const playBtn = document.getElementById('playBtn');
const closeBtn = document.getElementById('closeVideo');
const frame = document.getElementById('videoFrame');

playBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  frame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  frame.src = '';
});