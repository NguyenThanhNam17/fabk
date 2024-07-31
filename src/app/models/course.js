import mongoose, { now } from 'mongoose';
import slug from 'mongoose-slug-generator';
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLenght: 255 },
    description: { type: String, maxLenght: 600 },
    image: { type: String, maxLenght: 255 },
    videoId:{type:String},
    lever:{type:String},
    slug: { type: String, slug: 'name' },
},{
    timestamps:true,
});

export default mongoose.model('course', Course);
