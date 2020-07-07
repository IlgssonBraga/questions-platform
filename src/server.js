import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/questions", (req, res) => {
  res.render("question");
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
