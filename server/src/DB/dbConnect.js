import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database is connected ");
    } catch (error) {
        console.log(" Mongoodb error: " + error);
    }
};

export default dbConnect;
