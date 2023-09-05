import { Router } from "express";
import { getProjects } from "../controllers/projects.controller";

const ProjectRouter: Router = Router();
ProjectRouter.get("/get/:count?", getProjects);

export default ProjectRouter;
