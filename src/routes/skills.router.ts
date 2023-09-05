import { Router } from "express";
import { getSkills } from "../controllers/skills.controller";

const SkillRoutes: Router = Router();
SkillRoutes.get("/get/:classification?", getSkills);

export default SkillRoutes;
