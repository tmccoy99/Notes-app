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
  notesView = new NotesView();
  notesModel = new NotesModel();
});

it("displayNotes() methods adds a div for each note", () => {
  notesModel.add("Mow the lawn");
  notesModel.add("Feed the cat");
  notesView.displayNotes();
  expect(document.querySelectorAll("div#note").length).toBe(3);
});
