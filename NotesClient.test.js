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
});
