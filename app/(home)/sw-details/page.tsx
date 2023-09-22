// 'use client';

// import { useSession } from "next-auth/react"
// import { redirect } from "next/navigation"

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
export default async function Home2(){

    const session = await getServerSession(authOptions)

    // const {data:session, status} = useSession(
    //     {
    //     required:true
    // }
    // )

    if (!session){
        redirect('/api/auth/signin?callbackUrl=/sw-details&error=SessionRequired')
    }

    return (
        <>
            <h1>This contains students details</h1>
          
        </>
    )
}