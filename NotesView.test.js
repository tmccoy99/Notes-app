/**
 * @jest-environment jsdom
 */
const fs = require("fs");
const NotesView = require("./NotesView");
const NotesModel = require("./NotesModel");

let notesView;
let notesModel;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  notesModel = new NotesModel();
  notesView = new NotesView(notesModel);
});

it("displayNotes() methods adds a div for each note", () => {
  notesModel.addNote("Mow the lawn");
  notesModel.addNote("Feed the cat");
  notesView.displayNotes();
  expect(document.querySelectorAll("div.note").length).toBe(2);
});
