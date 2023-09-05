import { Request, Response } from "express";
import Project from "../schemas/project.schema";

// @desc    get other projects
// @route   GET /api/v3/projects/get
// @access  Public
export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find()
      .sort({ _id: 1 })
      .limit(+req.params.count || 0);

    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};
