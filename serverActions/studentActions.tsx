'use server'
import Student, {IStudent} from "@/models/student"
import { getActionError, type ActionError } from "./actionError"
import { put } from "@vercel/blob"

// Approach for handling server actions responses:
// return void, data or ActionError
// Error Logging would probably be done here.

export async function addStudent(student:IStudent):Promise<ActionError | void>{
    try{
        await Student.add(student)
    }catch(error){
        return getActionError(error, 'Failed to add student. Try again later.')
    }
}

export async function editStudent(id:string, dataToUpdate:Partial<IStudent>){
    try{
        const student = await Student.getById(id)
        if (!student){
            return {error:{message:'Student not found.'}} as ActionError
        }
        await student.update(dataToUpdate)
    }catch(error){
        return getActionError(error, 'Failed to edit student. Try again later.')
    }
}

export async function deleteStudent(studentId:string):Promise<ActionError | void>{
    try{
        const deletedStudent = await Student.findByIdAndDelete(studentId)
        if (!deletedStudent) throw new Error('Student not found.')
    }catch(error){        
        return getActionError(error, 'Failed to delete student. Try again later.')

    }
}

