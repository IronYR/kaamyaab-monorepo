import mongoose, { Schema } from "mongoose";
import {JobListing} from "../lib/definitions"
const jobListingSchema = new Schema<JobListing>({
  content: {
    required: true,
    type: String,
  },
  recruiter: {
    required: true,
    type: String,
  },
  
});

export default  mongoose.models.JobListing ?? mongoose.model("JobListing", jobListingSchema);