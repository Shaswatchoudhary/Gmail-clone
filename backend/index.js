import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import  Connection from "./database/db.js";

Connection();

const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`))