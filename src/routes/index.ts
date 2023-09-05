import SkillRoutes from "./skills.router";
import { Router } from "express";

const router: Router = Router();
router.use(`/skills`, SkillRoutes);

export default router;
