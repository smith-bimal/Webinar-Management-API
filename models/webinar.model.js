import { Schema, model } from 'mongoose';

const webinarSchema = new Schema({
    title: { type: String, required: true },
    short_description: { type: String, required: true },
    long_description: { type: String, required: true },
    enrollment_date: { type: Date, required: true },
    pricing: { type: Number, required: true },
    video_url: { type: String },
    transcript_url: { type: String },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    thumbnail_url: { type: String }
}, { timestamps: true })

const Webinar = model('Webinar', webinarSchema);

export default Webinar;