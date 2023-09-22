// import connectMongoDb from "@/lib/connectMongoDb";
import User from "@/models/user";

/*
SERVER COMPONENT WITH DYNAMIC RENDERING by SEGMENT CONFIGURATION
*/

export const dynamic = 'force-dynamic'; // By default it is static
// export const revalidate = 10; // To revalidate cache based on timing

async function getUsers(){
    // await connectMongoDb() // When Page is dynamic, connection from instrumentation can be used. No need to connect before./
    return await User.getAll()
}

export default async function Users(){
    const data = await getUsers()
    return(
        <>
        <h1>This is my Users Page 3</h1>
        <ul>
        {
            data.map((user) =>(
                <li>{user.username}
                </li>
            ))
        }
        </ul>
        <h2>Nothing</h2>
        </>
    )
}