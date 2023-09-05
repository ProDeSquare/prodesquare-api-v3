import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  technology: String,
  type: String,
  experience: String,
  level: Number,
});

export default mongoose.model("Skill", SkillSchema);
