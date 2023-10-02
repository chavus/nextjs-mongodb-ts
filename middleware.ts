import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Might need to stop and start server when modifying
process.env.MONGODB_URI // If not added,  Error: Please define the MONGODB_URI environment variable inside .env


export function middleware(request:NextRequest){
    if (request.nextUrl.pathname === '/'){
        return NextResponse.redirect(new URL('/sw-home', request.url))
    }

    return NextResponse.next()
}