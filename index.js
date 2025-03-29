import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.config.js';
import webinarRouter from './routes/webinar.routes.js';
import authRouter from './routes/auth.routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/webinars", webinarRouter);
app.use("/api/auth", authRouter);

app.get('/', (req, res) => {
    res.send("Router is working")
});

app.listen(port, () => {
    connectDB();
    console.log("Server started on port", port)
})