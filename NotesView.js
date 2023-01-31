class NotesView {
  constructor(model) {
    this.model = model;
    this.buttonEl = document.querySelector("#add-note-button");
    this.inputEl = document.querySelector("#write-note");
    this.buttonEl.addEventListener("click", () => {
      this.model.addNote(this.inputEl.value);
      this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll("div.note").forEach((noteEl) => {
      noteEl.remove();
    });
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const div = document.createElement("div");
      div.textContent = note;
      div.className = "note";
      document.querySelector("body").append(div);
    });
  }
}

module.exports = NotesView;
