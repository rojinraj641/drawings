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
    revision: {
        type: String,
        required: true
    },
    totalWeight: {
        type: Number,
        required: true
    },
    fabricationProgress: {
        type: Number,
        default: 0
    },
    erectionProgress: {
        type: Number,
        default: 0
    },
    area: {
        type: String,
        enum: ['Fly Ash Silo','Cement Silo','Packing Plant','Cement Bulk Loading'],
        required: true
    },
    isDetailed: {
        type: Boolean,
        default: false
    },
    didFabrication: {
        type: Boolean,
        default: false
    },
    didAssembly: {
        type: Boolean,
        default: false
    },
    didErection: {
        type: Boolean,
        default: false
    },
    dateOfIssue: {
        type: Date,
        default: Date.now()
    },
    detailer:{
        type: String,
    },
    detailerPhone: {
        type: String
    },
    detailerEmail: {
        type: String
    }
},{timestamps: true})

const Drawing = mongoose.model('Drawing',drawingSchema);

export default Drawing;
