class NotesView {
  constructor(model) {
    this.model = model;
  }

  displayNotes() {
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
