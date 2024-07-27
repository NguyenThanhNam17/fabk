import mongoose, { now } from 'mongoose';
const Schema = mongoose.Schema;

const course = new Schema({
    name: { type: String, maxLenght: 255 },
    key: { type: String, maxLenght: 600 },
    img: { type: String, maxLenght: 255 },
    createdAt: { type: Date, default: now },
    updatedAt: { type: Date, default: now },
});

export default mongoose.model('course', course);
