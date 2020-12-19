module.exports = (app) => {
    const dreams = require("./controller.dreams");

    app.post("/dreams", dreams.create);
    app.get("/dreams", dreams.findAll);
    app.get("/dreams/:id", dreams.findOne);
    app.put("/dreams/:id", dreams.update);
    app.delete("/dreams/:id", dreams.delete);
    app.post("/dreams/search", dreams.searchByTitle);
}