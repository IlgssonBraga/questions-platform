import Question from "../models/Question";
import Answer from "../models/Answer";

class QuestionsController {
  index(req, res) {
    Question.findAll({ raw: true, order: [["id", "DESC"]] }).then(
      (questions) => {
        res.render("index", { questions });
      }
    );
  }

  store(req, res) {
    const { title, description } = req.body;
    Question.create({ title, description }).then(() => {
      res.redirect("/");
    });
  }

  renderPage(req, res) {
    res.render("question");
  }

  show(req, res) {
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
  }
}

export default new QuestionsController();
