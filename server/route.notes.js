module.exports = (app) => {
    const notes = require("./controller.notes");

    app.post("/notes", notes.create);
    app.get("/notes", notes.findAll);
    app.get("/notes/:id", notes.findOne);
    app.put("/notes/:id", notes.update);
    app.delete("/notes/:id", notes.delete);
    app.post("/notes/search", notes.searchByTitle);
}