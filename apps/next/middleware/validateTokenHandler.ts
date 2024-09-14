import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';
import { CustomRequest } from 'lib/definitions';


const validateTokenHandler = async (req: CustomRequest): Promise<NextResponse | undefined> => {
  try {
    // Extract authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    }
    else{
      console.log("Found Token")
    }

    // Extract token from header
    const userToken = authHeader.split(' ')[1];
    if (!userToken) {
      return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
    }
    else{
      console.log(userToken)
    }

    // Verify token and attach user data to the request
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET as string) as JwtPayload;
    
    const user = decoded.user as CustomRequest['user'];

    (req as CustomRequest).user=user
    
    
    // If verification is successful, continue
    return undefined; // Indicating success, proceed in the route handler
  } catch (err) {
    console.error('Token validation error:', err);
    return NextResponse.json({ msg: 'Unauthorized' }, { status: 401 });
  }
};

export default validateTokenHandler;
