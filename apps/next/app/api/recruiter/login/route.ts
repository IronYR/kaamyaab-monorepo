import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import Recruiter from 'models/recruiter'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


export const POST = async (req: NextRequest) => {
    try{
        
        await db.dbConnect()
        const {email,password}=await req.json()
        if (!email || !password) {
            return NextResponse.json({ msg: 'enter all fields dimwit' }, { status: 400 })
        }

        const user=await Recruiter.findOne({email})
        if(!user){
            return NextResponse.json({ msg: 'no user found buffoon' }, { status: 400 })
        }
        
        const isPassword = bcrypt.compareSync(password, user.password);
        if(!isPassword){
            return NextResponse.json({ msg: 'wrong password imbecile' }, { status: 400 })
        }
        const secret: string | Buffer = process.env.JWT_SECRET as string;
        var accessToken = jwt.sign(
            {
              user: {
                username: user.username,
                email: user.email,
                id: user.id,
                role:"recruiter"
              },
            },
            secret,{expiresIn:"2m"}
        );
        return NextResponse.json({ token:accessToken }, { status: 201 })

    }
    catch(err){
        console.log("err")
    }
}