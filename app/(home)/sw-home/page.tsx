import StudentCard from "@/components/StudentCard"

const students = [{name:'Keanu Reeves', bachelor:'Mechanical Engineer',gpa:3.5},
                    {name:'Will Smith', bachelor:'Electrical Engineer',gpa:3.2},
                    {name:'Bruce Willias', bachelor:'Software Engineer',gpa:3.7},
                    {name:'Adam Sandler', bachelor:'Mechanical Engineer',gpa:3.5}
                ]

export default function Details(){
    return (
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {students.map(student=>
                <div className="flex justify-center">
                    <StudentCard studentInfo={student}/>
                </div>
            )}
        </div>
        

    )
}