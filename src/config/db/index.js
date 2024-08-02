import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://nam656947:FOq7689MROCCAXPW@cluster0.fepkmjm.mongodb.net/CoursesStore',
             {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex:true,
            },
        );
        console.log('thành công');
    } catch (error) {
        console.log('thất bại');
    }
}

export default { connect };
