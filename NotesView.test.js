/**
 * @jest-environment jsdom
 */
const fs = require("fs");
require("jest-fetch-mock").enableMocks();
const NotesView = require("./NotesView");
const NotesModel = require("./NotesModel");
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");

let notesView;
let notesModel;
let mockClient;

beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  notesModel = new NotesModel();
  mockClient = {
    loadNotes: jest.fn(),
  };
  notesView = new NotesView(notesModel, mockClient);
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

it("displayNotesFromApi loads notes from server and displays the received notes", (done) => {
  mockClient.loadNotes.mockImplementation((callback) => {
    callback(["Feed lawn", "Mow dog"]);
  });
  notesView.displayNotesFromApi().then(() => {
    const notes = document.querySelectorAll("div.note");
    expect(notes.length).toBe(2);
    expect(notes[0].textContent).toBe("Feed lawn");
    done();
  });
});
