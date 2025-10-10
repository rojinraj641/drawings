import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    try{
        const {username, email, password, keepSignedIn} = req.body;
        const existingUser = await User.findOne({
            $or: [{username},{email}]
        });
        if(existingUser){
            return res.status(400).json('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: 'User created successfully',
            user: {username: newUser.username, email: newUser.email}
        })
    }
    catch(error){
        return res.status(404).json('Something went wrong');
    }
}

export default signup;