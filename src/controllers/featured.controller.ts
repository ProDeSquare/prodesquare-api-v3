import { Request, Response } from "express";
import Featured from "../schemas/featured.schema";

// @desc    get featured projects
// @route   GET /api/v3/projects/featured
// @access  Public
export const getFeatured = async (req: Request, res: Response) => {
  try {
    const featured = await Featured.find()
      .sort({ _id: -1 })
      .limit(+req.params.count || 0);

    res.status(200).json(featured);
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};
