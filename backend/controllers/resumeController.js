import Resume from "../models/Resume.js";

// Create a new resume
export const createResume = async (req, res) => {
  try {
    const resume = new Resume({
      userId: req.user._id, // assuming user is logged in (from auth middleware)
      ...req.body,
    });
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all resumes of logged-in user
export const getUserResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id });
    res.json(resumes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single resume by ID
export const getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: "Resume not found" });
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update resume
export const updateResume = async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!updatedResume) return res.status(404).json({ message: "Resume not found" });
    res.json(updatedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete resume
export const deleteResume = async (req, res) => {
  try {
    const deletedResume = await Resume.findByIdAndDelete(req.params.id);
    if (!deletedResume) return res.status(404).json({ message: "Resume not found" });
    res.json({ message: "Resume deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
