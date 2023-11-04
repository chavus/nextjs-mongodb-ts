import { NextResponse, NextRequest } from "next/server";
import User, {IUser} from "@/models/user";
import { getNextErrorResponse } from "@/lib/nextErrorResponse";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getToken } from "next-auth/jwt"
import { NotAuthorizedError } from "@/lib/customErrors";
import { verify } from "@/lib/authJose";

export const dynamic = 'force-dynamic'; // GET is static by default

export async function GET(req:NextRequest){
   
    // Authentication moved to middleware
    /* 
    const session = await getServerSession(authOptions) // -> Gets session information  https://next-auth.js.org/configuration/nextjs#getserversession
    // getToken() -> verify and decrypt session jwt from the cookie or from the Auth header https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken
    // const session = await getToken({req})
    // Alternative to be able to authenticate and authorize with JWT(/authenticate endpoint) and also with sessions.
    let authenticatedUser;
    if (session){
        //Validate there is a session
        authenticatedUser = session.user;        
    } else {
        // Verify if there is a jwt token added to the Authorization Header
        authenticatedUser = await verify(req);
        if (!authenticatedUser) return getNextErrorResponse(new NotAuthorizedError('Authorization failed.'))
    } 
    */


    // const { searchParams } = new URL(request.url); // Makes route dynamic
    try{
        const allUsers = await User.getAll();
        // Following suggested format: https://github.com/cryptlex/rest-api-response-format
        return NextResponse.json(allUsers) // Static method for NextResponse class
    }catch(error){
        return getNextErrorResponse(error)
    }
}

export async function POST(request: NextRequest){
    const data:IUser = await request.json() //Get body from request as object from a ReadableStream // Can it be added as middleware?
    try{
        await User.add(data)
        return new NextResponse(
            JSON.stringify({message:'User created'}),
            {status:201} )
    }catch(error){
        return getNextErrorResponse(error)
    }
}