import mongoose, { Schema } from "mongoose";
import { JobListing } from "../lib/definitions";

const jobListingSchema = new Schema<JobListing>({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Temporary", "Internship"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  salaryRange: {
    type: String, 
    required: false,
  },
  requirements: {
    type: String, 
    required: true,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  },
  recruiter: {
    type: String,
    required: true,
  },
});

export default mongoose.models.JobListing ?? mongoose.model("JobListing", jobListingSchema);
