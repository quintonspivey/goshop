import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';


const userRouter = express.Router();

userRouter.post('/signin', expressAsyncHandler(async(req,res)=> {
    const user = await User.findOne({email:req.body.email});
    if (user){
        if (bcrypt.compareSync(user.password, req.body.password)) {
            res.send({
            _id: user._id,
            name: user_name,
            email: user.email,
            isAdmin:user.isAdmin,
            });
            return;
        }
    }
    res.status(401).send({message: "invalid email or password"});

        })
    
);

export default userRouter;

