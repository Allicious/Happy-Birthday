const memoryList = document.getElementById("memoryList");
let currentSlide = 0;
let slides = [];
let openedDateStr = "";

function loadMemories() {
  slides = [];
  // Prepare the date string once
  const openedDate = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  openedDateStr = openedDate.toLocaleDateString(undefined, options);

  for (let i = 0; i < loveNotes.length; i++) {
    if (localStorage.getItem(`read_${i}`)) {
      slides.push(
        `<div class="note-card">
          <div class="opened-date">Opened on: ${openedDateStr}</div>
          <div class="note-content">${loveNotes[i]}</div>
        </div>`
      );
    }
  }
  if (slides.length === 0) {
    slides.push(
      `<div class="note-card">
        <div class="opened-date">Opened on: ${openedDateStr}</div>
        <div class="note-content">No memories unlocked yet 💌</div>
      </div>`
    );
  }
  showSlide(0);
}

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentSlide = index;
  memoryList.innerHTML = slides[index];
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('prevSlide').onclick = function() {
    showSlide(currentSlide - 1);
  };
  document.getElementById('nextSlide').onclick = function() {
    showSlide(currentSlide + 1);
  };

  loadMemories();
});
