import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        console.log(reqBody);
        
        // Check for all fields
        if (!username || !email || !password) {
            NextResponse.json(
                {
                    status: 400,
                    message: "Plz fill all required fields"
                },
            )
        }

        //check if user already Exists
        const existingUser = await User.findOne({email});
        if (existingUser) {
            NextResponse.json(
                {error:"User already Exists"},
                {status:400}
            )
        }

        //hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        console.log(hashedPassword);

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save();
        console.log(savedUser);
        
        return NextResponse.json({
            message: "User created successfully",
            status: 200,
            success:true,
            savedUser
        })


    } catch (error:any) {
        return NextResponse.json(
            {error: error.message},
            {status:500}
        )
    }
}