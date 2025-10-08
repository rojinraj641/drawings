import mongoose from "mongoose";

const drawingSchema = new mongoose.Schema({
    drawingId: {
        type: String,
        required: true,
    },
    drawingNo:{
        type: String, 
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    },
    totalWeight: {
        type: Number,
        required: true
    },
    completedWeight: {
        type: Number,
        default: 0
    },
    scope: {
        type: String,
        enum: ['Fly Ash Silo','Cement Silo','Packing Plant','Cement Bulk Loading'],
        required: true
    },
    isDetailed: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const Drawing = mongoose.model('Drawing',drawingSchema);

export default Drawing;
