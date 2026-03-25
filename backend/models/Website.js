import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  prompt: String,
  code: String,
}, { timestamps: true });

const Website =  mongoose.model("Website", websiteSchema);
export default Website;