import mongoose from "mongoose";
import { jobTypeEnum } from "../config/enums";

const jobSchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    compony_name: {
      type: String,
    },
    position: {
      type: String,
    },
    type: {
      type: String,
      enum: Object.values(jobTypeEnum),
      required: true,
    },
    department_name: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Job = mongoose.model("Job", jobSchema);
