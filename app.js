import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { test } from "./backend/modules/jugadores.controller.js";


dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("si jalo")
})
.catch((error)=>{
    console.log("no jalo", error)
})

const app = express();
app.use(cors());
app.listen(4001,()=>{
    console.log("si escucha")
})

test()

