import FeaturedRoutes from "./featured.router";
import ProjectRouter from "./projects.router";
import SkillRoutes from "./skills.router";
import { Router } from "express";

const router: Router = Router();
router.use("/projects", FeaturedRoutes);
router.use("/projects", ProjectRouter);
router.use("/skills", SkillRoutes);

export default router;
