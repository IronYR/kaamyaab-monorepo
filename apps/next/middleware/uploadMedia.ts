import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
const uploadMedia = async (req: Request) => {
  try {
    const body = await req.json();
    const { mediaContent } = body;
    if (!mediaContent){
      return undefined
    }

    if (!mediaContent.startsWith('data:')) {
      return NextResponse.json(
        { message: 'Invalid mediaContent or not a base64 data URI' },
        { status: 400 }
      );
    }

  
    const mimeType = mediaContent.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];

    // Validate the MIME type (image or video)
    const isValidMedia = mimeType.startsWith('image/') || mimeType.startsWith('video/');
    if (!isValidMedia) {
      return NextResponse.json(
        { message: 'Invalid media type. Only images and videos are allowed.' },
        { status: 400 }
      );
    }

    const uploadResult = await cloudinary.uploader.upload(mediaContent, {
      resource_type: 'auto', 
    });

    
    return uploadResult.secure_url
  } catch (error) {
    console.error('Error uploading media:', error);
    return NextResponse.json({status:500})
  }
};

export default uploadMedia;
