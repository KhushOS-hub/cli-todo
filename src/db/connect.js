import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export async function connectDb() {
    if (mongoose.connection.readyState === 1) return



    try {
        await mongoose.connect(process.env.MONGO_URI, { maxPoolSize: 1 })
    } catch (error) {
        console.log("❌ Connection to database failed");
        process.exit(1)
    }

}

export async function disconnectDb() {
    if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect()
    }
}