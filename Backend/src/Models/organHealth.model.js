import mongoose from "mongoose";

const organHealthSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        name: {
            type: String,
            required: true,
            enum: [
                "Heart",
                "Lungs",
                "Liver",
                "Kidney",
                "Brain",
                "Bones",
            ],
        },

        status: {
            type: String,
            enum: ["Healthy", "Need Attention"],
            default: "Healthy",
        },

        note: {
            type: String,
            trim: true,
            default: "",
        },

        lastCheck: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

export const OrganHealth = mongoose.model("OrganHealth", organHealthSchema);
