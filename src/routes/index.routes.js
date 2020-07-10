import { Router } from "express";
import QuestionsController from "../app/controllers/QuestionsController";
import AnswerController from "../app/controllers/AnswerController";
const routes = Router();

routes.get("/", QuestionsController.index);

routes.get("/questions", QuestionsController.renderPage);

routes.post("/questions", QuestionsController.store);

routes.get("/questions/:id", QuestionsController.show);

routes.post("/answers", AnswerController.store);

export default routes;
