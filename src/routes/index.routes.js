import { Router } from "express";
import Question from "../app/models/Question";
import Answer from "../app/models/Answer";
const routes = Router();

routes.get("/", (req, res) => {
  Question.findAll({ raw: true, order: [["id", "DESC"]] }).then((questions) => {
    res.render("index", { questions });
  });
});

routes.get("/questions", (req, res) => {
  res.render("question");
});

routes.post("/save-questions", (req, res) => {
  const { title, description } = req.body;
  Question.create({ title, description }).then(() => {
    res.redirect("/");
  });
});

routes.get("/questions/:id", (req, res) => {
  const id = req.params.id;

  Question.findOne({ where: { id } }).then((question) => {
    if (question) {
      Answer.findAll({
        where: { questionId: question.id },
        order: [["id", "DESC"]],
      }).then((answers) => {
        res.render("singleQuestion.ejs", { question, answers });
      });
    } else {
      res.redirect("/");
    }
  });
});

routes.post("/answers", (req, res) => {
  const { answer, body } = req.body;
  Answer.create({ questionId: answer, body }).then(() => {
    res.redirect(`/questions/${answer}`);
  });
});

export default routes;
