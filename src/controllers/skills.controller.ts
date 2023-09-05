import { Request, Response } from "express";
import Skill from "../schemas/skill.schema";

// @desc    get skills
// @route   GET /api/v3/skills/get
// @access  Public
export const getSkills = async (req: Request, res: Response) => {
  try {
    const skills = await Skill.find();

    res.status(200).json(skills);
  } catch (err) {
    //
  }
};
