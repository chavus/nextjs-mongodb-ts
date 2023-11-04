'use client'
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"

export default function SessionTest(){
    const { data: session, status } = useSession()

    return <p>{session?.user.username}</p>
}