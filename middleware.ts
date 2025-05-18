import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // ...your logic...
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};