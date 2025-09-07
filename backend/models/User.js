import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // will store hashed password
    avatar: { type: String }, // profile picture URL

    settings: {
      defaultTemplate: { type: String, default: "modern" },
      defaultFont: { type: String, default: "Arial" },
      defaultColor: { type: String, default: "#000000" },
      language: { type: String, default: "en" },
      themeMode: { type: String, enum: ["light", "dark"], default: "light" }, // 👈 added field
    },

    resumes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Resume" }
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
