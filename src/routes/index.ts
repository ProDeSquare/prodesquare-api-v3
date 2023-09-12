import FeaturedRoutes from "./featured.router";
import ProjectRouter from "./projects.router";
import ContactRoutes from "./contact.router";
import SkillRoutes from "./skills.router";
import { Router } from "express";

const router: Router = Router();
router.use("/projects", FeaturedRoutes);
router.use("/projects", ProjectRouter);
router.use("/contact", ContactRoutes);
router.use("/skills", SkillRoutes);

export default router;
