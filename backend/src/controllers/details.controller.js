import Drawing from "../models/drawing.models.js";

const details = async(req,res)=>{
    try{
        const {drawingId} = req.query;
        const drawing = await Drawing.findOne({
            drawingId: drawingId
        })
        return res.status(200).json({data: drawing, message: 'Drawings found'});
    }
    catch(error){
        console.log('Error occured');
        return res.status(404).json({
            message: 'Drawing not found'
        })
    }
}

export default details;