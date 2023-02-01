class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.buttonEl = document.querySelector("#add-note-button");
    this.inputEl = document.querySelector("#write-note");
    this.buttonEl.addEventListener("click", () => {
      this.model.addNote(this.inputEl.value);
      this.displayNotes();
      this.inputEl.value = "";
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

  async displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }

  displayError() {
    const errorEl = document.createElement("div");
    errorEl.textContent = "Oops, something went wrong";
    errorEl.id = "error-message";
    document.querySelector("#main_container").append(errorEl);
  }
}

module.exports = NotesView;
