import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import  Connection from "./database/db.js";
import routes from "./routes/routes.js";
import cors from "cors";

Connection();

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use('/',routes)
app.listen(PORT,() => console.log(`Server running on port ${PORT}`))