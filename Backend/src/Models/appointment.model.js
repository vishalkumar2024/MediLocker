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
        },

        doctor: String,

        speciality: String,

        hospital: String,

        date: String,

        time: String,

        type: String,
    },
    {
        timestamps: true,
    }
);

export const appointmentModel = mongoose.model("Appointment", appointmentSchema);
