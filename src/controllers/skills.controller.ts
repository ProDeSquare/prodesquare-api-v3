import { Request, Response } from "express";
import Skill from "../schemas/skill.schema";
import capitalize from "../helpers/capitalize.helper";

// @desc    get skills
// @route   GET /api/v3/skills/get
// @access  Public
export const getSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const classification: string | undefined = capitalize(
      req.params.classification
    ).replace(/s$/, "");

    const initial = classification
      ? await Skill.find({ type: classification }).sort({ level: 1 })
      : await Skill.find().sort({ level: 1 });

    const skills: Record<string, string[]> = {};

    initial.forEach((skill) => {
      skills[`${skill.type}s`]
        ? skills[`${skill.type}s`].push(skill.technology)
        : (skills[`${skill.type}s`] = []);
    });

    res.status(200).json(skills);
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
};
