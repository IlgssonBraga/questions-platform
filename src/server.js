import express from "express";
import path from "path";
import bodyParser from "body-parser";
import connection from "./config/database";
import routes from "./routes/index.routes";

const app = express();

connection
  .authenticate()
  .then(() => console.log("Success"))
  .catch((e) => console.log(e));

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
