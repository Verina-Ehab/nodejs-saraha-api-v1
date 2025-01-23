import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv' 
dotenv.config({});

 
const updateUser = async (req, res) => {
    try {
        const { token } = req.headers;
        console.log(token, process.env.TOKEN_SECRET_KEY);
        const decode = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        console.log(decode);
        


        const updatedUser = await userModel.findByIdAndUpdate(decode.id, req.body, { new: true });

        // const { email, password, role } = req.body;
    } catch (err) { }
}

export default {updateUser};