import AddEditForm from '@/components/AddEditUserForm'
import User from '@/models/user'
import { getServerSession } from "next-auth";
import { RedirectType } from 'next/dist/client/components/redirect';
import { notFound, redirect } from 'next/navigation';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Allow only if logged in user is same as in session
// Error behavior and pages

// Errors:
// 1. Access denied -> Links to back or login
// 2. Need login -> Show message in login screen
// 3. Error for not found pages.

export default async function EditUser({params}:{params:{username:string}}){

    const username = params.username
    const session = await getServerSession(authOptions)

    if (!session || session.user.username != username ){
        redirect('/access-denied')
    }

    const user = await User.getByUsername(username)
    if (!user) notFound()
    const objectUser = user?.toObject()
    return(
        <AddEditForm user={JSON.parse(JSON.stringify(objectUser))}/> // Redundant JSON.parse and stringify -> https://github.com/vercel/next.js/issues/47447
    )
}