import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyData = {
        role: 'admin',
        email: 'abc@gmail.com'
    }
    let isAdmin = dummyData.role == 'admin'
    const isServicePage = request.nextUrl.pathname.startsWith('/services')
    if(isServicePage && !isAdmin) return NextResponse.redirect(new URL('/', request.url))
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }