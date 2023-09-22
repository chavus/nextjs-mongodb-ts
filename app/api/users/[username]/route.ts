import User,{IUser} from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { getNextErrorResponse } from "@/lib/nextErrorResponse";
import { NotFoundError } from "@/lib/customErrors";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NotAuthorizedError } from "@/lib/customErrors";


export const dynamic = 'force-dynamic'; // GET is static by default

export async function GET(request:NextRequest, { params }:{params:{username:string}}){
    // const { searchParams } = new URL(request.url); // Makes route dynamic
    let username = params.username
    try{
        const user = await User.getByUsername(username)
        if (!user) throw new NotFoundError(`User with username:${username} not found`)
        return NextResponse.json(user)
    } catch(error) {
        return getNextErrorResponse(error)
    }
}

export async function PATCH(request:NextRequest, { params }:{params:{username:string}}){
    const session = await getServerSession(authOptions)

    if (!session){
        return getNextErrorResponse(new NotAuthorizedError('Authorization failed.'))
    }

    const username = params.username
    const req:Partial<IUser> = await request.json();
    try{
        const user = await User.getByUsername(username)
        if (!user) throw new NotFoundError(`User with username:${username} not found`)
        await user.update(req)      
        return new NextResponse(
            JSON.stringify({message:`User: ${username} updated`}))        
    } catch(error) {
        return getNextErrorResponse(error)
    }

}