const btn = document.getElementById("revealBtn");
const noteDiv = document.getElementById("note");

function getTodayIndex() {
  const start = new Date('2025-11-24'); // or whatever start date
  const today = new Date();
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff;
}

function hasViewedToday() {
  const today = new Date().toISOString().split('T')[0];
  return localStorage.getItem("lastOpenedDate") === today;
}

function revealNote() {
  if (hasViewedToday()) {
    const index = getTodayIndex();
    noteDiv.textContent = `You already saw today's note 💕:\n\n"${loveNotes[index]}"`;
    noteDiv.classList.remove("hidden");
    return;
  }

  const index = getTodayIndex();
  if (index >= 0 && index < loveNotes.length) {
    const note = loveNotes[index];
    noteDiv.textContent = note;
    noteDiv.classList.remove("hidden");

    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem("lastOpenedDate", today);
    localStorage.setItem(`read_${index}`, true);
  } else {
    noteDiv.textContent = "No note for today... yet!";
    noteDiv.classList.remove("hidden");
  }
}

btn.addEventListener("click", revealNote);

