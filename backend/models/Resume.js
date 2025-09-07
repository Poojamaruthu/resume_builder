import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: { type: String, default: "My Resume" },
    template: { type: String, required: true },

    theme: {
      font: { type: String, default: "Arial" },
      color: { type: String, default: "#000000" },
      fontSize: { type: String, default: "14px" },
    },

    sections: {
      personalInfo: {
        fullName: String,
        email: String,
        phone: String,
        linkedin: String,
        github: String,
      },
      summary: String,

      education: [
        {
          degree: String,
          institution: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],

      internships: [ // 👈 renamed from experience
        {
          role: String,
          company: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],

      skills: [String],

      projects: [
        {
          title: String,
          description: String,
          link: String,
        },
      ],

      certificateCourses: [ // 👈 renamed + structured
        {
          courseName: String,
          institution: String,
          year: String,
        },
      ],

      achievements: [ // 👈 new field
        {
          title: String,        // e.g. "Solved 100 problems on CodeChef"
          platform: String,     // e.g. "CodeChef", "LeetCode"
          profileLink: String,  // e.g. URL to profile
        },
      ],
    },

    completionPercent: { type: Number, default: 0 }, // progress tracking
  },
  { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
