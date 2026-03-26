import mongoose from "mongoose";
const WebsiteSchema = mongoose.Schema({
    prompt: String,
    code: String
}, { timestamps: true });

const Website = mongoose.model("Website", WebsiteSchema);
export default Website;