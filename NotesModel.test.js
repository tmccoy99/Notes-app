const NotesModel = require("./NotesModel");

let notesModel;

beforeEach(() => {
  notesModel = new NotesModel();
});

it("getNotes() calls before notes added returns empty array", () => {
  expect(notesModel.getNotes()).toStrictEqual([]);
});

it("addNote(note) can be used to add notes to the model", () => {
  notesModel.addNote("Buy milk");
  notesModel.addNote("Go to the gym");
  expect(notesModel.getNotes()).toStrictEqual(["Buy milk", "Go to the gym"]);
});
