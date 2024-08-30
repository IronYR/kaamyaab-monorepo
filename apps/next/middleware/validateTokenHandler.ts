import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

interface CustomRequest extends NextRequest {
  user?: {
    username: string;
    email: string;
    id: string;
    role:string;
  };
}

const validateTokenHandler = async (req: CustomRequest): Promise<NextResponse | undefined> => {
  try {
    // Extract authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    }

    // Extract token from header
    const userToken = authHeader.split(' ')[1];
    if (!userToken) {
      return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    }

    // Verify token and attach user data to the request
    const decoded = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET as string) as JwtPayload;
    req.user = decoded.user as CustomRequest['user'];

    // If verification is successful, continue
    return undefined; // Indicating success, proceed in the route handler
  } catch (err) {
    console.error('Token validation error:', err);
    return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
  }
};

export default validateTokenHandler;
