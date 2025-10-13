import Drawing from "../models/drawing.models.js";

const details = async(req,res)=>{
    try{
        const {drawingId} = req.query;
        const drawing = await Drawing.findOne({
            drawingId: drawingId
        })
        if(drawing){
            return res.status(200).json({data: drawing, message: 'Drawings found'});
        }
        else{
            return res.status(404).json({message: 'Drawing not found'})
        }
    }
    catch(error){
        console.log('Error occured');
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export default details;