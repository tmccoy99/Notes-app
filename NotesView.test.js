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

it("Notes can be set with text input element and displayed with button", () => {
  inputEl = document.querySelector("#write-note");
  buttonEl = document.querySelector("#add-note-button");
  inputEl.value = "Feed the giraffe";
  buttonEl.click();

  const notes = document.querySelectorAll("div.note");
  expect(notes.length).toBe(1);
  expect(notes[0].textContent).toBe("Feed the giraffe");
});

it("displayNotes() can be called twice and still have the correct number of notes", () => {
  inputEl = document.querySelector("#write-note");
  buttonEl = document.querySelector("#add-note-button");
  inputEl.value = "Feed the giraffe";
  buttonEl.click();

  let notes = document.querySelectorAll("div.note");
  expect(notes.length).toBe(1);
  expect(notes[0].textContent).toBe("Feed the giraffe");

  inputEl.value = "Go on small bungie jump";
  buttonEl.click();
  notes = document.querySelectorAll("div.note");
  expect(notes.length).toBe(2);
});
