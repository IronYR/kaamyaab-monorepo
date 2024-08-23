import mongoose, { Schema } from "mongoose";
import {Student} from "../lib/definitions"

const studentSchema = new Schema<Student>({
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
  university:{
    required:true,
    type:String,
  }
});

export default  mongoose.models.Student ?? mongoose.model("Student", studentSchema);