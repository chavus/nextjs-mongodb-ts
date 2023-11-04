//Static page and dynamic component

import User from "@/models/user";
import userCard from "@/components/user-card";
import UsersClient from "./users-list";
import connectMongoDb from "@/lib/connectMongoDb";
import Link from "next/link";
import RefreshButton from "@/components/RefreshButton";

/*
STATIC SERVER PAGE WITH DYNAMIC COMPONENT
*/

export const dynamic = 'force-dynamic'; // By default it is static
// export const revalidate = 10; // To revalidate cache based on timing

async function getUsers(){
    await connectMongoDb()
    // return await User.getAll()
    const user = await User.getByUsername('user33')
    return user?.fullName
}

export default async function Users(){
    // const data = await getUsers()
    const user = await getUsers()
    return(
        <>
        <RefreshButton/>
        <Link href='/sw-home'> Back to home</Link>
        <h1>This is being rendered statically from server</h1>
        <div className="flex flex-row gap-3">
        {/* {
            data.map((user) =>(
                userCard(user)
            ))
        } */}
        <p>User 33 name: {user}</p>
        </div>
        <h2>This is being rendered from client</h2>
        {
            <UsersClient/>
        }
        </>
    )
}