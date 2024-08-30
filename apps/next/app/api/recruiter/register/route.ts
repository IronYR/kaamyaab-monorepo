import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import Recruiter from 'models/recruiter'
import bcrypt from 'bcryptjs'

export const POST = async (req: NextRequest) => {
  try {
    await db.dbConnect()
    const { name, email, password, company } = await req.json()
    if (!name || !email || !password || !company) {
      return NextResponse.json({ msg: 'enter all fields dimwit' }, { status: 400 })
    }
    const isEmail = await Recruiter.findOne({ email })
    if (isEmail) {
      return NextResponse.json({ msg: 'email already in use buffoon' }, { status: 400 })
    }

    const salt = bcrypt.genSaltSync(10)
    const hpassword = bcrypt.hashSync(password, salt)

    const newUser = await Recruiter.create({
      name,
      email,
      password: hpassword,
      company
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
