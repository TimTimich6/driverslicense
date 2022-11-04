import express from "express";
import path from "path";
import fs from "fs";
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/license/:name", (req, res) => {
  const name = req.params.name;
  fs.readFile("src/storage.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data.toString());
    console.log(student);
    res.render("index", { test: "adawd" });
  });
});
app.listen(3000, () => {
  console.log("Listening on 3000");
});
