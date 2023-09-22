// Page server with protected content
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ServerProtectedPage(){
    const session = await getServerSession(authOptions)

    if (!session){
        redirect('/api/auth/signin?callbackUrl=/protectedPageServer')
    }
    return(
        <h1>Logged in as {session.user?.username} from server page</h1>

    )
}