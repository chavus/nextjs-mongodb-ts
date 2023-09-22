'use client'
import { useEffect, useState } from "react";
import { IUser } from "@/models/user";
import { useSession } from "next-auth/react";

/* 
CLIENT COMPONENT FETCHING DATA FROM INTERNAL API
*/

async function getUsers(){
    const res = await fetch('api/users') // Call is authenticated with session.
    const resJson = await res.json()
    return resJson
}

export default function UsersClient(){
    const {data:session, status} = useSession({required:true})
    const [usersData, setUsersData] = useState<IUser[]>([])

    useEffect( () => {
        // fetch(`${BASE_URL}/users`).then((response)=> response.json())
        // .then((json)=>setUsersData(json.data))        
        (async ()=>{ // To use async/await
            const users = await getUsers()
            setUsersData(users)
        }
        )()
    },[])
    

    let protectedContent = <h1>Loading...</h1>;
    if (status === 'authenticated'){
        protectedContent = (
            <>
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
    }


    return (
        <>
        {
            protectedContent
        }
        </>
    )
}