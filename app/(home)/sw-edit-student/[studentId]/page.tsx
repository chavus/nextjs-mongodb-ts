import AddEditStudentForm from "@/forms/AddEditStudentForm"
import Student from "@/models/student"
import { notFound } from "next/navigation"

export const dynamic = 'force-dynamic'

export default async function EditStudent({params}:{params:{studentId:string}}){
   const student= await Student.getById(params.studentId)
   if (!student) notFound()
   return <AddEditStudentForm student={student.toObject()}/>
}