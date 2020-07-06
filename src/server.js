import express from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  let name = "Ilgsson";
  let lang = "Javascript";
  let showMsg = true;
  const products = [
    { name: "Xbox One", price: "1599.99" },
    { name: "PS4", price: "2199.99" },
  ];
  res.render("index", { name, lang, msg: showMsg, products });
});

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
