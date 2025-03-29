import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error("Error connecting to MongoDB");
        console.error(err.message);
    }
}

export default connectDB