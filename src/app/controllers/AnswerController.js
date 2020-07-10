import Answer from "../models/Answer";

class AnswerController {
  store(req, res) {
    const { answer, body } = req.body;
    Answer.create({ questionId: answer, body }).then(() => {
      res.redirect(`/questions/${answer}`);
    });
  }
}

export default new AnswerController();
