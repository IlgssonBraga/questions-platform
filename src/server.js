import express from "express";
import path from "path";
import bodyParser from "body-parser";
import connection from "./config/database";
import Question from "./app/models/Question";

const app = express();

connection
  .authenticate()
  .then(() => console.log("Success"))
  .catch((e) => console.log(e));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Question.findAll({ raw: true, order: [["id", "DESC"]] }).then((questions) => {
    res.render("index", { questions });
  });
});

app.get("/questions", (req, res) => {
  res.render("question");
});

app.post("/save-questions", (req, res) => {
  const { title, description } = req.body;
  Question.create({ title, description }).then(() => {
    res.redirect("/");
  });
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
