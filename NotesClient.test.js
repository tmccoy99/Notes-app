require("jest-fetch-mock").enableMocks();
const NotesClient = require("./NotesClient");
const notesClient = new NotesClient();

describe("Client class testing", () => {
  it("calls fetch and loads data", () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ["feed cat", "walk dog"],
      })
    );
    notesClient.loadNotes((data) => {
      expect(data.notes).toStrictEqual(["feed cat", "walk dog"]);
    });
  });

  it("createNote() method creates new note in the backend server", (done) => {
    fetch.mockResponse(JSON.stringify(["Build shed"]));
    notesClient.createNote("Build shed", (data) => {
      expect(data).toStrictEqual(["Build shed"]);
      done();
    });
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: "Build shed" }),
    });
  });
});
