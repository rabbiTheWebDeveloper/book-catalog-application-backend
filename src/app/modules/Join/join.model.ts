import mongoose, { Schema } from "mongoose";
import { IJoin } from "./join.interface";


const joinSchema = new Schema<IJoin>(
  {
    webinar_date: {
      type: String,
      required: true,
    },
    join_date: {
      type: String,
      required: true,
    },
    join_video_link: {
      type: String,
    },
    whatsapp_link: {
      type: String,
    },
    fb_link: {
      type: String,
    },
    thanks_video_link: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    }
  },
  {
    timestamps: true,
    versionKey:false
  } 
  
);

export const Joins = mongoose.model<IJoin>("join-pages", joinSchema);