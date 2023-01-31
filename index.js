// index.js
const NotesModel = require("./NotesModel");
const NotesView = require("./NotesView");

const model = new NotesModel();
const view = new NotesView(model);
