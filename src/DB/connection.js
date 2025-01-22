import mongoose from 'mongoose';

const connection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/Saraha', {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
    ).then(() => console.log("DB Connected"))
        .catch((e) => console.log(`DB Error Connection ${e.message}`));
}

export default connection;