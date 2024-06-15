
// export const connectDB = async()=>{
//     await mongoose.connect('mongodb://localhost:27017/food-del').then(()=>console.log("db connected"));
// }

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    const URI = process.env.MongoDBURI;

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error: ", error);
    }
};
