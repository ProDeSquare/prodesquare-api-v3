import mongoose from "mongoose";

const Featured = new mongoose.Schema({
  title: String,
  description: String,
  built_with: String,
  github: String,
  image: String,
  link: String,
});

export default mongoose.model("Featured", Featured);
