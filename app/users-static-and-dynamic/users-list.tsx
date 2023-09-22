'use client'
import { useEffect, useState } from "react";
import userCard from "@/components/user-card";
import {IUser} from "@/models/user"

/* 
CLIENT COMPONENT FETCHING DATA FROM INTERNAL API
*/

const BASE_URL = "https://papex-reflective-bat-wq.mybluemix.net"

async function getUsers(){
    const res = await fetch('api/user')
    const resJson = await res.json()
    return resJson
}

interface User{
    name:string
}

export default function UsersClient(){

    const [usersData, setUsersData] = useState<IUser[] | null>(null)

    useEffect( () => {
        // fetch(`${BASE_URL}/users`).then((response)=> response.json())
        // .then((json)=>setUsersData(json.data))        
        (async ()=>{ // To use async/await
            const users = await getUsers()
            setUsersData(users)
        }
        )()
    },[])

    return (
        <>
        <ul>
            
            {usersData ?
            usersData.map((user) =>
                userCard(user)
            
            ) :
            <h1>Loading client side users</h1>
            }
        </ul>
        </>
    )
}