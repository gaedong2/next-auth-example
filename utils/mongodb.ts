// utils/mongodb.ts
import mongoose from 'mongoose'

export async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    const uri = process.env.MONGODB_URI


    if (!uri) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
    }

    return mongoose.connect(uri, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
}
