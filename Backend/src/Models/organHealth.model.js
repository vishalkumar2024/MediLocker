import mongoose from "mongoose";

const organHealthSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        name: {
            type: String,
            required: true,
        },

        status: {
            type: String,
            enum: ["Healthy", "Warning", "Critical"],
            default: "Healthy",
        },

        image: {
            type: String,
            default: "",
        },

        note: String,

        lastCheck: Date,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("OrganHealth", organHealthSchema);