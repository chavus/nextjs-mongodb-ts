// Client page with protected content
'use client'
import {signOut, useSession} from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect, useState } from "react";
import { IUser } from "@/models/user";


async function getUsers(){
    const res = await fetch('api/users') // Call is authenticated with session.
    const resJson = await res.json()
    return resJson
}

export default function ProtectedPage(){
    const { data:session, status } = useSession({
                                                required:true
    })
    const [usersData, setUsersData] = useState<IUser[]>([])

    useEffect( () => {
        // fetch(`${BASE_URL}/users`).then((response)=> response.json())
        // .then((json)=>setUsersData(json.data))        
        (async ()=>{ // To use async/await
            const users = await getUsers()
            console.log(users)
            setUsersData(users)
        }
        )()
    },[])

    let protectedContent;
    
    if (status === 'loading'){
         protectedContent = <h1>Loading...</h1>
    } else if (status === 'authenticated'){
        protectedContent = (
            <>
            <h1>{`User is logged in as ${session?.user?.username}`}</h1>
            {/* <h1>{`User is logged in as ${session?.user?.username}`}</h1> */}
            <button onClick={()=> signOut({callbackUrl:'/sw-login'})}>Sign out</button>

            <ul>
            {usersData ?
            usersData.map((user) =>
                ( <li>{user.username}</li>
                    )
            
            ) :
            <h1>Loading</h1>
            }
        </ul>

            </>
        )

    }else{
        protectedContent = <a href="/api/auth/signin">Sign in first</a>
    }

    return (<>
    
        <h1>This text is open to everyone</h1>
        {
            protectedContent
        }
       
        </>
    )

    

    

}