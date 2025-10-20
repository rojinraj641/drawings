import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

const login = async (req,res)=>{
    try{
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const data = User.findOne({
            email: email,
            password: hashedPassword
        })
        console.log('User found')
        return res.status(200).json({message: 'User found'});
    }
    catch (error){
        console.log(`Error message: ${error.message}`);
        return res.status(404).json({message: 'User not found'});
    }
}

export default login;