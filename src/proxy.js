import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 
export async function proxy(request) {
    const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

   if(!session){
       const loginUrl = new URL('/signin', request.url)
       const callbackURL = request.nextUrl.pathname || '/'
       loginUrl.searchParams.set('callbackURL', callbackURL)  
       return NextResponse.redirect(loginUrl)        
   }
   return NextResponse.next();
}
 
export const config = {
  matcher: ['/profile','/products/:path']
}



// import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'
 
// export async function proxy(request) {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })

//   if (session) {
//     const loginUrl = new URL('/signin', request.url)

//     // 👉 এখানে current path add করছি
//     // loginUrl.searchParams.set('from', request.nextUrl.pathname)

//     return NextResponse.redirect(loginUrl)
//   }
// }
 
// export const config = {
//   matcher: ['/profile', '/products/:path']
// }


// import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'
 
// export async function proxy(request) {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })

//   if (session) {
//     const loginUrl = new URL('/signin', request.url)

//     // 👉 এখানে current path add করছি
//     // loginUrl.searchParams.set('from', request.nextUrl.pathname)

//     return NextResponse.redirect(loginUrl)
//   }
// }
 
// export const config = {
//   matcher: ['/profile', '/products/:path']
// }