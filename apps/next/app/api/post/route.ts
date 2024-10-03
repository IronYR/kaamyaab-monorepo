import db from 'lib/mongo';
import { NextRequest, NextResponse } from 'next/server';
import Post from 'models/post';

export async function GET(req: NextRequest) {
  try {
    
    await db.dbConnect();
    const allPosts = await Post.find({});

    if (!allPosts || allPosts.length === 0) {
      return NextResponse.json({ msg: 'No posts found' }, { status: 404 });
    }

    return NextResponse.json({ posts: allPosts }, { status: 200 });
  } catch (err) {
    console.error('Error fetching all posts:', err);
    return NextResponse.json({ msg: 'Internal Server Error' }, { status: 500 });
  }
}
