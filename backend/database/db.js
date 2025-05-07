import mongoose from "mongoose";

const Connection = () => {
    const DB_URI = process.env.MONGO_URL;
    try {
        mongoose.connect(DB_URI);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection