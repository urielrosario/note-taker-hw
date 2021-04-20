const fs = require("fs");
const uniqid = require("uniqid");
const database = require("../db/db.json");

module.exports = (app) => {
  app.get("api/notes", (req, res) => res.json(database));

  app.post("/api/notes", (req, res) => {
    req.body["id"] = uniqid();
    database.push(req.body);
    console.log(database);
    res.json(database);
    fs.writeFileSync("./db/db.json", JSON.stringify(database));
  });
  app.delete("api/notes/:id", (req, res) => {
    var deleteNote = database.findIndex((i) => i.id === req.params.id);
    database.splice(deleteNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(database));
  });
};
