import mongoose, { Schema } from "mongoose";
import {Post} from "../lib/definitions"
const postSchema = new Schema<Post>({
  
  textContent: {
    required: true,
    type: String,
  },
  mediaContent:{
    required:false,
    type:String,
  },
  user: {
    required: true,
    type: String,
  },
  postedDate: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.models.Post ?? mongoose.model("Post", postSchema);