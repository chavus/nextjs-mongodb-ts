import { NextRequest, NextResponse } from "next/server";
import {verify} from './lib/authJose' // Uses jose Edge library

process.env.MONGODB_URI // If not added,  Error: Please define the MONGODB_URI environment variable inside .env

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
  };

export async function middleware(request:NextRequest){  
    /**
     * Authentication middleware for APIs protection
     * 1. Encrypt password when saving using bcrypt 
     * 2. Comparing encrypted password(bcrypt) using /authenticate route
     * 3. Sign and return token(jose lib) also on /authenticate
     * 4. Verify token(jose lib) to allow continue with routing.
     */

    let bypassedRoutes:Array<[method:string,path:string]>= [
       ['POST','/api/authenticate'],
       ['GET','/api/auth/signin'],
    //    ['GET','/api/users']
    ]

    function isRequestBypassed(request: NextRequest){
        return bypassedRoutes.some((bypassedRoute)=> request.method === bypassedRoute[0] && request.nextUrl.pathname === bypassedRoute[1]
        )
    }

    // Using conditional Statements to match middleware implementation

    //  Bypass specific route and method
    //  Authenticate Post and Patch by default
    //  Check for empty payloads on post/patch

    if (request.nextUrl.pathname.startsWith('/api')){   // Find a better way to organize middleware contraints
        
        // Verify there is valid payload for POST AND PATCH
        if (['POST','PATCH'].includes(request.method)){
            try{
                const reqObj = await request.json()
                if (Object.keys(reqObj).length === 0){
                    throw Error
                }
            }catch(err){
                return new NextResponse(
                    JSON.stringify({ message: 'Check body of request. Must contain a body'  }),
                    { status: 400 },
                    );
            }   
        }

        if (!isRequestBypassed(request)){
            // Verify token for authorization            
            try{
                const payload = await verify(request)
            }catch(err){
                return new NextResponse(
                    JSON.stringify({ message: 'Authorization failed.'  }),
                    { status: 401 },
                    );
            }
        }
        }

    /**END OF AUTHENTICATION MIDDLEWARE LOGIC */
    
        return NextResponse.next()


}
