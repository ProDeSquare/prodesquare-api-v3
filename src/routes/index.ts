import FeaturedRoutes from "./featured.router";
import SkillRoutes from "./skills.router";
import { Router } from "express";

const router: Router = Router();
router.use(`/projects`, FeaturedRoutes);
router.use(`/skills`, SkillRoutes);

export default router;
