import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },

    value: String,

    min: Number,

    max: Number,

    unit: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blood", bloodSchema);