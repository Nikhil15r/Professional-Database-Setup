import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();
























/* 
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on('error', (err) => {
            console.log("Error connecting", err);
            throw err;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error);
        throw Error;
    }
})(); */