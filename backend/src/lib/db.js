import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)
    console.error(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("MongoD connection error:", error)
  }
}