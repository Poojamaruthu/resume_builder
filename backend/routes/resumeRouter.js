import express from "express";
import {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume,
} from "../controllers/resumeController.js";

// (Optional) import auth middleware if you have JWT auth
// import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Resume routes
router.post("/", /*protect,*/ createResume);        // Create resume
router.get("/", /*protect,*/ getUserResumes);       // Get all resumes of logged-in user
router.get("/:id", /*protect,*/ getResumeById);     // Get resume by ID
router.put("/:id", /*protect,*/ updateResume);      // Update resume
router.delete("/:id", /*protect,*/ deleteResume);   // Delete resume

export default router;
