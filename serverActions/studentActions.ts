'use server'
import Student, {IStudent} from "@/models/student"
import { deleteProfileImage } from "./studentsProfileImageActions"
import { type ActionResponse } from "@/global"
import { getResponseError } from "./actionResponseError"

export async function addStudent(student:IStudent):Promise<ActionResponse | void>{
    try{
        await Student.add(student)
    }catch(error){
        return getResponseError('Failed to add student. Try again later.', error)
    }
}

export async function editStudent(id:string, dataToUpdate:Partial<IStudent>){
    try{
        const student = await Student.getById(id)
        if (!student){
            return getResponseError('Student not found')
        }
        await student.update(dataToUpdate)
    }catch(error){
        return getResponseError('Failed to edit student. Try again later.', error)
    }
}

export async function deleteStudent(studentId:string):Promise<ActionResponse | void>{
    try{
        // Delete image from bucket
        const deletedStudent = await Student.findByIdAndDelete(studentId)
        
        if (deletedStudent) {
            const profileImageUrl = deletedStudent.profileImageUrl
            if (profileImageUrl){
                const deleteRes = await deleteProfileImage(profileImageUrl)
                if (deleteRes?.error){
                    console.log('Student was deleted but failed to delete profile image from bucket.')
                    console.log('Image URL: ', deletedStudent.profileImageUrl)
                }
            }
        }
        else {
            return getResponseError('Student not found.')
        }
    }catch(error){        
        return getResponseError('Failed to delete student. Try again later.', error)

    }
}

