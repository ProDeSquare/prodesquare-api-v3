import { Router } from "express";
import { getFeatured } from "../controllers/featured.controller";

const FeaturedRoutes: Router = Router();
FeaturedRoutes.get("/featured/:count?", getFeatured);

export default FeaturedRoutes;
