import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import Post from 'models/post'
import validateTokenHandler from 'middleware/validateTokenHandler'
import uploadMedia from 'middleware/uploadMedia'
import { CustomRequest } from 'lib/definitions'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validationResponse = await validateTokenHandler(req)
    if (validationResponse) return validationResponse

    if ((req as CustomRequest)?.user?.role !== 'student') {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    }
    else{
        console.log('student verified')
    }
    const { id } = params
    if ((req as CustomRequest)?.user?.id !== id) {
      return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    } else{
        console.log('student authorized')
    }

    const body = await req.json()
    const res = await uploadMedia(body)
    if (res instanceof NextResponse) {
      console.log(`error senor ${res}`)
      return res
    } else{
        console.log('image uploaded')
    }
    const mediaContent = res as string | null
    const { textContent } = body

    if (!textContent) {
      return NextResponse.json({ msg: 'Havent entered textcontent' }, { status: 400 })
    }

    const user = id

    await db.dbConnect()
    console.log("db connected")
    const newPost = await Post.create({
      textContent,
      mediaContent,
      user,
    })
    console.log("success")
    return NextResponse.json({ msg: newPost }, { status: 201 })
  } catch (err) {
    console.log(err)
    return NextResponse.json({ msg: err }, { status: 501 })
  }
}

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
    
      const { id } = params;
    
  
      await db.dbConnect();
  
      const studentPosts = await Post.find({ user: id });
  
      return NextResponse.json({ posts: studentPosts }, { status: 200 });
    } catch (err) {
      console.error('Error fetching student posts:', err);
      return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
    }
  }