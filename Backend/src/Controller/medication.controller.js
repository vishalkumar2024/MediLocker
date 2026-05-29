import {medicationModel} from "../Models/medication.model.js";
import { UserModel } from "../Models/user.model.js";


const medication = async (req, res) => {

    const { userId, name, dose, PrescribedFor, time } = req.body;

    try {

        // Validation
        if (!userId || !name || !dose || !PrescribedFor || !time) {
            return res.status(400).json({
                success: false,
                message: "All input fields are required",
            });
        }

        // Create medication
        const createdMedication = await medicationModel.create({
            user: userId,
            name,
            dose,
            PrescribedFor,
            time,
        });

        // Push medication id into user model
        await UserModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    medications: createdMedication._id,
                },
            },
            { new: true }
        );

        return res.status(201).json({
            success: true,
            message: "Medication created successfully",
            medication: createdMedication,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Could not create medication",
            error: error.message,
        });
    }
};

export { medication }