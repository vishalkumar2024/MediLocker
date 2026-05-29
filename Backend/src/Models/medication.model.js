import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        name: {
            type: String,
            required: true,
        },

        dose: String,

        time: String,

        PrescribedFor: String,

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Medication", medicationSchema);