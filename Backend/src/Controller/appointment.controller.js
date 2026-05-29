import {appointmentModel} from "../Models/appointment.model.js";
import { UserModel } from "../Models/user.model.js";


const appointment = async (req, res) => {

    const { userId, doctor, speciality, hospital, date, time, type } = req.body;

    try {

        // Validation
        if (!userId || !doctor || !speciality || !hospital || !date || !time ) {
            return res.status(400).json({
                success: false,
                message: "All input fields are required",
            });
        }

        // Create Appointment
        const createdAppointment = await appointmentModel.create({
            user: userId,
            doctor,
            speciality,
            hospital,
            date,
            time,
            type
        });

        // Push appointment id into user model
        await UserModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    appointments: createdAppointment._id,
                },
            },
            { new: true }
        );

        return res.status(201).json({
            success: true,
            message: "appointment created successfully",
            appointment: createdAppointment,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Could not create appointment",
            error: error.message,
        });
    }
};

export { appointment }