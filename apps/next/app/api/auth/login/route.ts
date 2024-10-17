import db from 'lib/mongo'
import { NextResponse } from 'next/server'
import Student from 'models/student'
import Recruiter from 'models/recruiter'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { serialize } from 'cookie'

export const POST = async (req: Request) => {
  const maxTime = 60 * 20 * 10
  try {
    await db.dbConnect()
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ msg: 'enter all fields dimwit' }, { status: 400 })
    }

    let user = await Student.findOne({ email })
    let role
    if (!user) {
      user = await Recruiter.findOne({ email })
      role = 'recruiter'
    } else {
      role = 'student'
    }
    if (!user) {
      return NextResponse.json({ msg: 'no user found buffoon' }, { status: 400 })
    }

    const isPassword = bcrypt.compareSync(password, user.password)
    if (!isPassword) {
      return NextResponse.json({ msg: 'wrong password imbecile' }, { status: 400 })
    }
    const secret: string | Buffer = process.env.JWT_SECRET as string
    var accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
          role: role,
        },
      },
      secret,
      { expiresIn: maxTime }
    )

    const serialized = serialize('test', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      // sameSite: "strict",
      maxAge: maxTime,
      path: '/',
    })

    const res = { token: accessToken, serialize: serialized, role }
    return new Response(JSON.stringify(res), { status: 200, headers: { 'Set-Cookie': serialized } })
  } catch (err) {
    console.log('err')
  }
}
