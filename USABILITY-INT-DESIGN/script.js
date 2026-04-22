// Open Story Map Link
document.getElementById("openMapBtn").addEventListener("click", function () {
    window.open(
        "https://uploads.knightlab.com/storymapjs/46c00b809c4314bd52d681a0a98917b2/map-test-2/index.html",
        "_blank"
    );
});

// Scroll to Detail Section
document.getElementById("exploreBtn").addEventListener("click", function () {
    document.getElementById("detail-section").scrollIntoView({
        behavior: "smooth"
    });
});

// Alternate History Text
const originalText =
`Located in the heart of campus, Holland-Terrell Library is a central hub for
students, offering collaborative spaces, research tools, and scenic study areas.`;

const historyText =
`Originally opened in 1950 and later renovated into the Holland and Terrell Libraries,
this landmark has become one of WSU's most iconic academic spaces, serving generations
of students through evolving technology and research needs.`;

let showingHistory = false;

document.getElementById("historyBtn").addEventListener("click", function () {
    const textElement = document.getElementById("libraryText");

    if (!showingHistory) {
        textElement.textContent = historyText;
        this.textContent = "CURRENT INFO";
    } else {
        textElement.textContent = originalText;
        this.textContent = "HISTORY";
    }

    showingHistory = !showingHistory;
});

// Video Modal
const playBtn = document.getElementById("playBtn");
const videoModal = document.getElementById("videoModal");
const closeVideo = document.getElementById("closeVideo");
const videoFrame = document.getElementById("videoFrame");

playBtn.addEventListener("click", function () {
    videoModal.style.display = "flex";

    // Replacing with  actual YouTube/video URL
    videoFrame.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
});

closeVideo.addEventListener("click", function () {
    videoModal.style.display = "none";
    videoFrame.src = "";
});

// Close modal if clicking outside video
window.addEventListener("click", function (e) {
    if (e.target === videoModal) {
        videoModal.style.display = "none";
        videoFrame.src = "";
    }
});