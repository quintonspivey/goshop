import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to ");
}).catch(err =>{
    console.log(err.message);
});

const app = express();

app.get('/',(req,res) =>{
    res.send('Server is ready');
});
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
const port = process.env.PORT || 5002;

app.listen(port, () => {
    console.log(`Serve at http://localhost;${port}`);
});