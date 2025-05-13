import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest){
    try {

        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);
        
        //if user exists
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({
                error:"User already exists",
                status:400,
                success:false
            })
        }

        // if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword){
            return NextResponse.json({
                error:"Invalid password",
                status:400,
                success:false
            })
        }

        // token Data
        const tokenData = {
            id: user._id.toString(),
            email: user.email,
            name: user.username
        }
        // creating token
        const token = await jwt.sign(tokenData, "utsav", { expiresIn: "1d" }); // precess.env.TOKEN_SECRET will come
        const response = NextResponse.json({
            message:"Login Successful",
            success:true
        });

        response.cookies.set("token", token, {
            httpOnly:true,
        })
        return response;

    } catch (error) {
        return NextResponse.json({
            status: 500,
            success:false
        })
    }
}