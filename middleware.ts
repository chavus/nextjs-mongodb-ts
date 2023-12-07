import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';

// Might need to stop and start server when modifying
process.env.MONGODB_URI // If not added,  Error: Please define the MONGODB_URI environment variable inside .env

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!_next/static|_next/image|favicon.ico|api/auth|manifest.json|icons|images).*)',
    ],
  };

const noAuthRoutes:Array<[method:string,path:string]>= [
    ['GET','/sw-login-client'],
    ['GET','/sw-home'],
    ['GET', '/access-denied'],
    ['GET','/sw-signup'],
    ['POST','/api/users'],
    ['GET','/api/uploadthing'], // endpoints should not be blocked by middleware.ts https://docs.uploadthing.com/faq#when-i-upload-files-i-get-the-error-failed-to-simulate-callback-for-file-is-your-webhook-configured-correctly
    ['POST','/api/uploadthing']
 ]

 function noAuthRequired(request: NextRequest){
    return noAuthRoutes.some((noAuthRoutes)=> request.method === noAuthRoutes[0] && request.nextUrl.pathname === noAuthRoutes[1]
    )
}

export async function middleware(request:NextRequest){
    
    // root redirect to home
    if (request.nextUrl.pathname === '/'){
        return NextResponse.redirect(new URL('/sw-home', request.url))
    }

    //Authentication
    if (!noAuthRequired(request)){
        // Verify token for authorization       
        const token = await getToken({req:request})// use get Token instead of getServerSession since it is not supported by Edg
        
        // Auth of API endpoints
        if (request.nextUrl.pathname.startsWith('/api') && !token){
            return new NextResponse( // New NextResponse object to add status and other properties
                JSON.stringify({message: 'Authorization failed.'}), 
                {status:401})
        }

        // Authentication of view endpoints
        if (!token){
            return NextResponse.redirect(new URL(`/sw-login-client?callbackUrl=${request.nextUrl.pathname}&error=SessionRequired`, request.url))
        }

        // Special case
        if (request.nextUrl.pathname.startsWith('/sw-edit-user')){
            const user = request.nextUrl.pathname.split('/').slice(-1)[0]
            if (user != token.user.username){
                return NextResponse.redirect(new URL('/access-denied', request.url))
            }
        }

    }

        // For later: Rewrite the url of access-denied with originated url, like NotFound and Error pages from NextJS
    // if (request.nextUrl.pathname === '/access-denied'){
    //     const origin = request.headers.get('Referer') as string
    //     console.log(origin)
    //     return NextResponse.rewrite(new URL(origin, request.url))
    // }

    return NextResponse.next()
}