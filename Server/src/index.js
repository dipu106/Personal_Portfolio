import express from "express";
import dotenv from 'dotenv';
import nodeMailerRouter from './Routers/nodeMailerRouter.js';
import {connection } from './Models/dbConfig.js';
import cors from 'cors';
const app=express();
dotenv.config()
//cors
const corsOption = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
//middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//;
app.get('/',(req,res)=>{
    console.log("Welcome to Backend developer Era");
    return res.status(200).json({message:"Api Working Fine"});
 
});
//router
app.use("/send/request",nodeMailerRouter);

const PORT=process.env.PORT;
try{
app.listen(PORT || 3000,async()=>{
    await connection.authenticate();

    await connection.sync();
console.log(`Server Working on ${PORT}`);
});
}catch(err){
    console.log('err during connection');
}
