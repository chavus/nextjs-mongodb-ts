import { NextResponse } from "next/server";
import * as User from "@/models/user";
import { log } from "console";

export const dynamic = 'force-dynamic'; // GET is static


export async function GET(){
    // const { searchParams } = new URL(request.url); // Makes route dynamic

    const allUsers = await User.getAllUsers();


    log('Returning all users')
    return NextResponse.json(allUsers)

}