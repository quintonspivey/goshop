import express from 'express';
import User from '../models/userModel';
import expressAsyncHandler from 'express-async-handler';
import bcrypy from 'bcrypt';
import { BucketEncryption } from 'aws-cdk-lib/aws-s3';

const userRouter = express.Router();

userRouter.get('/signin', expressAsyncHandler(async(req,res)=> {
    const user = await User.findOne({email:req.body.email});
    if (user){
        if (bcrypt.compareSync(user.password, req.body.password) {
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

