import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, unique: true },
    address: { type: String },
    dateOfBirth: { type: Date },
}, { timestamps: true })

const User = model("User", userSchema);

export default User;