const { model, Schema } = require("mongoose");

const bookSchema = Schema(
  {
    author: {
      type: String,
      required: [true, "Please add author"],
      trim: true,
      maxLength: [50, "Cannot be more than 15 symbols"],
      minLength: [2, "Cannot be less than 2 symbols"],
    },
    country: { type: String },
    imageLink: { type: String },
    language: {
      type: String,
      enum: ["English", "Danish", "Italian", "Akkadian", "Hebrew", "Arabic"],
    },
    link: { type: String },
    pages: {
      type: Number,
      maxLength: [2000, "Cannot be more than 2000"],
      minLength: [2, "Cannot be less than 2"],
    },
    title: {
      type: String,
      required: [true, "Please add title"],
      trim: true,
      maxLength: [50, "Cannot be more than 50 symbols"],
      minLength: [2, "Cannot be less than 2 symbols"],
    },
    year: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = model("book", bookSchema);
