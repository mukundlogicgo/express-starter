import mongoose from "mongoose";

const studySchema = new mongoose.Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    course_name: {
      type: String,
    },
    is_student: {
      type: Boolean,
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

export const Study = mongoose.model("Study", studySchema);
