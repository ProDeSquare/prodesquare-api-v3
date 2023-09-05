import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  built_with: String,
  github: String,
  link: String,
});

export default mongoose.model("Project", ProjectSchema);
