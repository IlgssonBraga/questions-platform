import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let name = "Ilgsson";
  let lang = "Javascript";
  res.render("index", { name, lang });
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
