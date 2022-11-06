import { License } from "./index";
import express from "express";
import path from "path";
import fs from "fs";
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.post("/license/find", (req, res) => {
  console.log(req.body);
  res.redirect("/license/" + req.body.person);
});
app.get("/license/:name", (req, res) => {
  const name = req.params.name;
  fs.readFile("src/storage.json", (err, data) => {
    if (err) throw err;
    let students = JSON.parse(data.toString());
    console.log(students);
    const student = students.find((student: License) => student.name == name);
    if (student) return res.render("index", { student });
    return res.send("Driver not found");
  });
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
