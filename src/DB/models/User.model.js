import { model, Schema } from "mongoose";

const roleTypes = {
    User: "user",
    Admin: "admin",
    SuperAdmin: "superadmin",
}


const userSchema = Schema({
    userName: {
        type: String,
        required: [true, "required field*"],
        minlength: 2,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        default: "Other",
        // required: true
    },
    DOB: Date,
    image: String,
    confirmEmail: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: Object.values(roleTypes) ,
        default: roleTypes.User,
        // required: true
    }
}, {
    timestamps: true
})


const userModel = model("User", userSchema);

export default userModel;