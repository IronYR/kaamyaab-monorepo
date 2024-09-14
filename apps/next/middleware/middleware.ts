import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userType = getUserTypeFromSession(request) // Implement this function based on your auth system

  if (!userType) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (!['student', 'recruiter', 'university'].includes(userType)) {
    return NextResponse.redirect(new URL('/404', request.url))
  }

  const url = request.nextUrl.clone()
  url.pathname = `/dashboard/${userType}${url.pathname.slice('/dashboard'.length)}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: '/dashboard/:path*',
}
