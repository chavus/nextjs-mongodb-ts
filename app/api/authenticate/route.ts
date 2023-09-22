// Authenticate endpoint

import { NextRequest, NextResponse } from "next/server";
import { sign } from '@/lib/authJose'
import User,{IUser} from '@/models/user'
import { getNextErrorResponse } from "@/lib/nextErrorResponse";

import { NotAuthorizedError } from "@/lib/customErrors";

export async function POST(request:NextRequest){

    const {username, password} = await request.json()
    const user = await User.getByUsername(username)
    if (user && await user.isPasswordCorrect(password)){
        const token = await sign(user.toObject())
        return NextResponse.json({token})
    }else{
        return getNextErrorResponse(new NotAuthorizedError('Username or password is incorrect'))
    }

}