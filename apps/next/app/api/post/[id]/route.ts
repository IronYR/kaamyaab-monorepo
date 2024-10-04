import db from 'lib/mongo'
import { NextRequest, NextResponse } from 'next/server'
import Post from 'models/post'
import uploadMedia from 'middleware/uploadMedia'
import validateTokenHandler from 'middleware/validateTokenHandler'
import { CustomRequest } from 'lib/definitions'
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await db.dbConnect()

    const { id } = params

    // Find the post by ID
    const post = await Post.findById(id)

    if (!post) {
      return NextResponse.json({ msg: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ post }, { status: 200 })
  } catch (err) {
    console.error('Error fetching post:', err)
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 })
  }
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validationResponse = await validateTokenHandler(req)
    if (validationResponse) return validationResponse

    

    await db.dbConnect()

    const { id } = params
    const post=await Post.findById(id)
    const userID=post.user
    if ((req as CustomRequest)?.user?.id !== userID) {
        return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    }

    const body=await req.json()
    const res = await uploadMedia(body)
    if (res instanceof NextResponse) {
      console.log(`error senor ${res}`)
      return res
    }
    const mediaContent = res as string | null
    const { textContent } = await body
    
    if (!textContent) {
      return NextResponse.json({ msg: 'Content is required' }, { status: 400 })
    }

    // Find the post by ID and update it
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { textContent, mediaContent },
      { new: true }
    )

    if (!updatedPost) {
      return NextResponse.json({ msg: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json(
      { msg: 'Post updated successfully', post: updatedPost },
      { status: 200 }
    )
  } catch (err) {
    console.error('Error updating post:', err)
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 })
  }
}
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const validationResponse = await validateTokenHandler(req)
    if (validationResponse) return validationResponse

   
    await db.dbConnect()

    const { id } = params
    const post=await Post.findById(id)
    const userID=post.user
    if ((req as CustomRequest)?.user?.id !== userID) {
        return NextResponse.json({ msg: 'Not Authorized' }, { status: 401 })
    }

    // Find the post by ID and delete it
    const deletedPost = await Post.findByIdAndDelete(id)

    if (!deletedPost) {
      return NextResponse.json({ msg: 'Post not found' }, { status: 404 })
    }

    return NextResponse.json({ msg:"success",post: deletedPost}, { status: 200 })
  } catch (err) {
    console.error('Error deleting post:', err)
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 })
  }
}
