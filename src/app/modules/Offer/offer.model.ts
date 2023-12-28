import mongoose, { Schema } from "mongoose";
import { IOffer } from "./offer.interface";


const categorysSchema = new Schema<IOffer>(
  {
    offer_type: {
      type: String,
      required: true,
    },
    offer_date: {
      type: String,
      required: true,
    },
    video_link: {
      type: String,
    },
    description: {
      type: String,
    }
  },
  {
    timestamps: true,
    versionKey:false
  } 
  
);

export const Offers = mongoose.model<IOffer>("offer-page", categorysSchema);