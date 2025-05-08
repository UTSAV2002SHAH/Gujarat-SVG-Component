import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";
import { stringify } from "querystring";

const userSchema = new mongoose.userSchema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
        trim:true
    },
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        trim: true
    },
    isVerified:{
        type:Boolean,
        default: false
    },
    isAdmin:{
        type:Boolean,
        default: false
    },

    forgotPasswordToken: String,
    forgotpasswordTokenExpiry : Date,
    veriftyToken : String,
    verifyTokenExpiry : Date,

    
})



const User = mongoose.models.users || mongoose.model("User","userSchema");

export default User;