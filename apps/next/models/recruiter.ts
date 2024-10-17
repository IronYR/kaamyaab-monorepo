import mongoose, { Schema } from "mongoose";
import {Recruiter} from "../lib/definitions"
const recruiterSchema = new Schema<Recruiter>({
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  company:{
    required:true,
    type:String,
  }
});

export default  mongoose.models.Recruiter ?? mongoose.model("Recruiter", recruiterSchema);