import mongoose from "mongoose";

const FeaturedSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    built_with: String,
    github: String,
    image: String,
    link: String,
  },
  { collection: "featured" }
);

export default mongoose.model("Featured", FeaturedSchema);
