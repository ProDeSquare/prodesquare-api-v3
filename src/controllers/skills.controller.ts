import { Request, Response } from "express";
import Skill from "../schemas/skill.schema";

// @desc    get skills
// @route   GET /api/v3/skills/get
// @access  Public
export const getSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const skills = req.params.classification
      ? await Skill.find({ type: req.params.classification }).sort({ level: 1 })
      : await Skill.find().sort({ level: 1 });

    res.status(200).json(skills);
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};
