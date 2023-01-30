const NotesModel = require("./NotesModel");

let notesModel;

beforeEach(() => {
  notesModel = new NotesModel();
});

it("getNotes() calls before notes added returns empty array", () => {});
