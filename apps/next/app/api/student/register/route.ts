import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import Student from 'models/student'
import bcrypt from 'bcryptjs'

export const POST = async (req: NextRequest) => {
  try {
    await db.dbConnect()
    const { name, email, password, university } = await req.json()
    if (!name || !email || !password || !university) {
      return NextResponse.json({ msg: 'enter all fields dimwit' }, { status: 400 })
    }
    const isEmail = await Student.findOne({ email })
    if (isEmail) {
      return NextResponse.json({ msg: 'email already in use buffoon' }, { status: 400 })
    }

    const salt = bcrypt.genSaltSync(10)
    const hpassword = bcrypt.hashSync(password, salt)

    const newUser = await Student.create({
      name,
      email,
      password: hpassword,
      university,
    })

    if(newUser){
        return NextResponse.json({ _id: newUser.id, name: newUser.name }, { status: 201 })
    }
    else{
        return NextResponse.json({msg:'someth buggin cuh'}, { status: 400 })
    }
  } catch (err) {
    console.log(err)
  }
}
