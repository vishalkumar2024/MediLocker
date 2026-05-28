import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        status: {
            type: String,
            enum: ["upcoming", "completed"],
            default: "Pending",
        },

        doctor: String,

        speciality: String,

        date: Date,

        time: String,

        hospital: String,

        type: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Appointment", appointmentSchema);