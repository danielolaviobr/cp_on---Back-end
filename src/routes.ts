import { Router } from "express";

import cpController from "./controllers/cpController";

const routes = Router();

routes.post("/create", cpController.create);
routes.get("/:uid", cpController.show);

export default routes;
