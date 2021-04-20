const fs = require("fs");
const uniqid = require("uniqid");
const database = require("../db/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(database));

  app.post("/api/notes", (req, res) => {
    req.body.id = uniqid();
    database.push(req.body);
    // console.log(database);
    res.json(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(database));
  });
  app.delete("/api/notes/:id", (req, res) => {
    const deleteNote = (object) => object.id === req.params.id;
    database.splice(database.findIndex(deleteNote), 1);
    fs.writeFileSync("./db/db.json", JSON.stringify(database));
    res.json("done");
  });
};
