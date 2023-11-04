import StudentCard from "@/components/StudentCard"
import Student from "@/models/student";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const dynamic = 'force-dynamic';

export default async function Details(){

    const session = await getServerSession(authOptions)
    const allStudents = await Student.getAll()

    return (
        <>
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">Students Details</h1>
                {allStudents.map((student,i)=>
                    <div key={i} className="flex justify-center">
                        <StudentCard student={student} showEdit={Boolean(session?.user.isAdmin)} showDetails={true}/>
                    </div>
                )}
            </div>
        </>
        
    )
}
