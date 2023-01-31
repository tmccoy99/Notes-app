// index.js
const NotesModel = require("./NotesModel");
const NotesView = require("./NotesView");
const NotesClient = require("./NotesClient");

const model = new NotesModel();
const client = new NotesClient();
const view = new NotesView(model, client);

view.displayNotesFromApi();
