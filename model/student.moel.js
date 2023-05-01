import mongoose from "mongoose";
import {
  educationEnum,
  studentTypeEnum,
  workStudyTypeEnum,
} from "../config/enums.js";

const studentSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: Object.values(studentTypeEnum),
    },
    hrNo: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    middleName: {
      type: String,
    },
    email: {
      type: String,
    },
    mobileNumber1: {
      type: String,
    },
    mobileNumber2: {
      type: String,
    },
    whatsAppNumber: {
      type: String,
    },
    education: {
      type: String,
      enum: Object.values(educationEnum),
    },
    occupation_type: {
      type: String,
      enum: Object.values(workStudyTypeEnum),
    },
    occupation_id: {
      type: String,
      enum: Object.values(workStudyTypeEnum),
      refPath: "occupation_type",
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model("Student", studentSchema);
