import userModel from "../../../DB/models/User.model.js  ";
import * as bcrypt from 'bcrypt'

const register = async (req, res) => {
    try {
        const { userName, email, password, confirmedPassword } = req.body;

        if (password !== confirmedPassword) {
            return res.status(422).json({ message: "Passwords do not match" });
        }
        if (await userModel.findOne({ email })) { res.status(409).json({ message: "Email already exists" }) }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await userModel.create({ userName, email, password });

        res.status(200).json({ message: "Welcome to register", user });
    } catch (error) {
        res.status(500).json({ message: "AUTH error", error: error.message });

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        user = await userModel.findOne({ email })
        if (!user) { res.status(404).json({ message: "Invalid Email" }) }

        const match = bcrypt.compareSync(password, user.password);
        if (!match) { res.status(422).json({ message: "Invalid password" }) }
        const obsecUser = user.toObject()
        delete obsecUser.password;
        res.status(200).json({ message: "Welcome to Saraha HOME", obsecUser });
    } catch (error) {
        res.status(500).json({ message: "AUTH error", error: error.message });

    }
}

export { register, login }