import { NextResponse } from "next/server";
import connectMongoDb from "@/lib/connectMongoDb";
import { getAllUsers } from "@/models/user";
// import User from '@/models/user'
import { log } from "console";


export const dynamic = 'force-dynamic'; // GET is static by default, need to add this to make it dynamic


export async function GET(){
    // const { searchParams } = new URL(request.url);

        // await connectMongoDb()

    const allUsers = await getAllUsers();




    log('Returning all roles(users)')
    return NextResponse.json(allUsers)
 

}