import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId:{
        type: String,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    drawings: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Drawing'
        }],
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
},{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;