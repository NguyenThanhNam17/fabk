import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://nguyenthanhnammc17:d63e6SWOnflQdjCB@namtest.pykq5bw.mongodb.net/namdemo',
             {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('thành công');
    } catch (error) {
        console.log('thất bại');
    }
}

export default { connect };
