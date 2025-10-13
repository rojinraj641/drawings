import Drawing from "../models/drawing.models.js";
import User from "../models/user.models.js";

const newDrawings = async (req, res) => {
    try {
        const {
            username,
            drawingNo,
            description,
            revision,
            totalWeight,
            fabricationCompleted,
            erectionCompleted,
            area,
            detailed,
            fabrication,
            assembly,
            erection,
            detailer,
            detailerPhoneNumber,
            detailerEmail,
        } = req.body;

        const existingDrawing = await Drawing.findOne({drawingNo: drawingNo})
        if(existingDrawing){
            return res.status(409).json({message:"Drawing already existed"});
        }

        const newDrawing = await Drawing.create({
            drawingNo,
            description,
            revision,
            totalWeight,
            fabricationCompleted,
            erectionCompleted,
            area,
            detailed,
            fabrication,
            assembly,
            erection,
            detailer,
            detailerPhoneNumber,
            detailerEmail
        });

        const user = await User.findOne({username});
        user.drawings.push(newDrawing._id);
        await user.save();

        return res.status(201).json({
            data: newDrawing,
            message: "New drawing added successfully",
        });
    } catch (error) {
        console.error("Error adding new drawing:", error);
        return res
            .status(500)
            .json({ message: error.message || "Something went wrong" });
    }
};

export default newDrawings;
