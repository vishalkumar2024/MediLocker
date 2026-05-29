import medicationModel from "../Models/medication.model.js";


const medication = async (req, res) => {

    const { name, dose, PrescribedFor, time} = req.body;

    try {

        if (!name || !dose || !PrescribedFor || !time) {
            return res.status(404).json({
                success: false,
                message: "All input fields are not filled",
            })
        }

        const created = await medicationModel.create({
            name,
            dose,
            PrescribedFor,
            time
        })

        return res.status(200).json({
            success: true,
            message: "Successfully created medication",
            user: created
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "could not create medication",
        })
    }
}

export { medication }