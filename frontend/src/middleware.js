import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req) {
   
  const token = req.cookies.get('token'); // Cookies से टोकन प्राप्त करें
//   console.log(req);


  if (!token) {
    return NextResponse.json(
        { error: 'Authorization token is missing' },
        { status: 401 }
    );
}
  
    try {
        console.log('fdfd');
        // Token ko verify karte hain
        jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);  // Ensure you use your secret key for verification
        return NextResponse.next();  // Agar token valid hai to request continue karega
    } catch (err) {
        console.error('JWT Verification Error:', err.message); // Error लॉग करें

        // Agar token invalid hai to login page pe redirect karenge
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*',  // Dashboard aur uske sub-routes
        '/cart/:path*',       // Cart aur uske sub-routes
        '/checkout/:path*',   // Checkout aur uske sub-routes
    ],
};
