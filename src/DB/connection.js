import mongoose from 'mongoose';
import * as dotenv from 'dotenv' 
dotenv.config({});

const connection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
    ).then(() => console.log("DB Connected"))
        .catch((e) => console.log(`DB Error Connection ${e.message}`));
}

export default connection;