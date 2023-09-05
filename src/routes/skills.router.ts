import { Router } from "express";
import { getSkills } from "../controllers/skills.controller";

const SkillRoutes: Router = Router();
SkillRoutes.get("/get", getSkills);

export default SkillRoutes;
