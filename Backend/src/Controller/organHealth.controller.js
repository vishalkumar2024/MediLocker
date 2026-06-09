import { OrganHealth } from "../Models/organHealth.model.js";
import { UserModel } from "../Models/user.model.js";

const addOrganHealth = async (req, res) => {
    try {
        const { userId, organs } = req.body;

        if (!userId || !organs) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields",
            });
        }

        for (const organ of organs) {

            const updatedOrgan = await OrganHealth.findOneAndUpdate(
                {
                    user: userId,
                    name: organ.name,
                },
                {
                    user: userId,
                    name: organ.name,
                    status: organ.status,
                    note: organ.note,
                    lastCheck: organ.lastCheck,
                },
                {
                    returnDocument: "after",
                    upsert: true,
                }
            );

            await UserModel.findByIdAndUpdate(
                userId,
                {
                    $addToSet: {
                        organHealthRecords: updatedOrgan._id,
                    },
                }
            );
        }

        return res.status(200).json({
            success: true,
            message: "Organ health updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export { addOrganHealth };
