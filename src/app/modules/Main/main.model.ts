import mongoose, { Schema } from "mongoose";
import { IMain } from "./main.interface";


const mainSchema = new Schema<IMain>(
  {
    webinar_date: {
      type: String,
      required: true,
    },
    webinar_text: {
      type: String,
      required: true,
    },
    join_link: {
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

export const Mains = mongoose.model<IMain>("main-pages", mainSchema);