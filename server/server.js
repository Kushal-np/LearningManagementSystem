import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db.js';
dotenv.config()
const app = express()
const PORT = process.env.PORT || 6969;
cors({
    origin:process.env.CLIENT_URL,
    methods:["GET","POST","DELETE","PUT"],
    allowedHeaders:["Content-Type","Authorization"]
})

app.use(express.json())
app.use((err,req,res,next)=>{
    console.log(err.stack);
})
connectDB()
app.listen(PORT , ()=>{
    console.log(`Your server is running on port ${PORT}`)
})