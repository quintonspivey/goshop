import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to ");
}).catch(err =>{
    console.log(err.message);
});

const app = express();

app.get('/',(req,res) =>{
    res.send('Server is ready');
})
const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Serve at http://localhost;${port}`);
});