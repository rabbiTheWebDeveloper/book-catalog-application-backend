import mongoose, { Schema } from "mongoose";
import { ILead } from "./lead.interface";


const leadSchema = new Schema<ILead>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    phone: {
      type: String,
      unique:true
    },

    payment_status: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    }
  },
  {
    timestamps: true,
    versionKey:false
  } 
  
);

export const Leads = mongoose.model<ILead>("lead-users", leadSchema);