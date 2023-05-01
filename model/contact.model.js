import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    primary_number: {
      type: String,
      required: true,
    },
    secondary_number: {
      type: String,
    },
    whatsapp_number: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
