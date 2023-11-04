'use client'
// import mongoose from 'mongoose'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/elements/Button'
import ButtonCustom from '@/components/elements/ButtonCustom'
import {type IStudent} from '@/models/student'
import Alert from "@/components/elements/Alert";
import { addStudent, deleteStudent, editStudent } from '@/serverActions/studentActions';
import ConfirmationModal from '@/components/ConfirmationModal'
import revalidatePath from '@/serverActions/revalidatePath'
import { getDataToUpdate } from './formsUtils'

// Standardize actionREsponse handling

//4. Details

export default function AddEditStudentForm({student}:{student?:IStudent}){
    const [isSaving, setIsSaving] = useState(false)
    const [openAddEditSuccessModal, setOpenAddEditSuccessModal] = useState(false);
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [openDeleteSuccessModal, setOpenDeleteSuccessModal] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        clearErrors,
        setError,
        formState:{errors, dirtyFields}
    } = useForm<IStudent>({
        reValidateMode:'onSubmit',
        defaultValues: student ? student : {}
    })

    const formFields = {
        fullName: register('fullName',{required:"Required field.", onChange:()=>clearErrors('fullName')}),
        major:register('major', {required:"Required field.",onChange:()=>clearErrors('major')}),
        gpa:register('gpa', {required:"Required field.",
                             min:{value:0, message:"Enter value between 0 and 4"}, 
                             max:{value:4, message:"Enter value between 0 and 4"}, 
                             onChange:()=>clearErrors('gpa')})
    }

    async function onSave(data:IStudent){
        let dataToUpdate:any
        let actionResp:any
        setIsSaving(true)
        if (student){
            dataToUpdate = getDataToUpdate(data, dirtyFields)
            actionResp = await editStudent(student.id, dataToUpdate)
        }else{
            actionResp =  await addStudent(data)
        }

        // Might be standardized in a function
        if (actionResp?.error && actionResp.error.validationErrors){
            const errors = actionResp.error.errors as any
            errors.forEach((error:{field:keyof typeof formFields, message:string}) => {
                setError(error.field,{message:error.message})
        });
        }else if (actionResp?.error){
            setError('root', {message:'Error: ' + actionResp?.error?.message})
        }else{
            setOpenAddEditSuccessModal(true)
        }
        setIsSaving(false)
        }

    async function onDeleteClick(){
        const actionResp = await deleteStudent(student?.id)
        if (actionResp?.error){
            setOpenDeleteConfirmationModal(false)
            setError('root', {message:'Error: ' + actionResp?.error?.message})
        }else{
            setOpenDeleteConfirmationModal(false)
            setOpenDeleteSuccessModal(true)
        }
    }

    function revalidateAndPushAfterSuccess(){
        revalidatePath('/sw-details')
        revalidatePath('/sw-home')
        router.push('/sw-details')
    }

    return (
        <form onSubmit={handleSubmit(onSave)} className="flex h-screen flex-col items-center">        
        <div className="mb-4 text-xl font-bold max-w-xs w-full text-left ">{student ? 'Edit ' : 'Add '} student:</div>

        {errors.root &&  <Alert closeFn={()=>clearErrors('root')}>{errors.root.message}</Alert>}

        <div className='flex flex-col max-w-xs w-full '> 
            <div className="mb-3">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium ">Student name</label>
                <input {...formFields.fullName} name="fullName" type="text" id="fullName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Full Name" />
                <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
                    {errors.fullName?.message}
                </p>
            </div>

            <div className="mb-3">
                <label htmlFor="major" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bachelor:</label>
                <select {...formFields.major} defaultValue="" id="major" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="" disabled>Choose a Major</option>
                    <option value="Business">Business</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Industrial Engineering">Industrial Engineering</option>
                </select>
                <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
                        {errors.major?.message}
                </p>
            </div>

            <div className="mb-3">
                <label htmlFor="gpa" className="block mb-2 text-sm font-medium ">GPA</label>
                <input {...formFields.gpa} name="gpa" type="number" step=".1" id="gpa" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="GPA" />
                <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
                    {errors.gpa?.message}
                </p>
            </div>

        </div>

        <div className='flex flex-col w-full max-w-xs '>
            <Button type="submit" className="mb-3" isProcessing={isSaving} disabled={isSaving}>{student ? 'Save' : 'Add'}</Button> 
            {student && <ButtonCustom onClick={()=>setOpenDeleteConfirmationModal(true)} color="danger" outline >Delete</ButtonCustom>}
        </div>

        {/* Add/Edit student success modal */}
        <ConfirmationModal 
            openConfirmationModal={openAddEditSuccessModal}
            setOpenConfirmationModal={setOpenAddEditSuccessModal}
            header={`Student ${student ? 'edited' : 'added'}!`}
            onCloseClick={revalidateAndPushAfterSuccess}
            onButtonClick={revalidateAndPushAfterSuccess}
            />

        {/* Delete confirmation modal */}
        <ConfirmationModal
            type='warning'
            openConfirmationModal={openDeleteConfirmationModal}
            setOpenConfirmationModal={setOpenDeleteConfirmationModal}
            header={`Are you sure you want to delete student: ${student?.fullName}?`}
            buttonLabel='Delete'
            onButtonClick={onDeleteClick}
            onSecondaryButtonClick={()=>setOpenDeleteConfirmationModal(false)}
        />

        {/* Delete success modal */}
        <ConfirmationModal 
            openConfirmationModal={openDeleteSuccessModal}
            setOpenConfirmationModal={setOpenDeleteSuccessModal}
            header={`Student ${student?.fullName} deleted!`}
            onCloseClick={revalidateAndPushAfterSuccess}
            onButtonClick={revalidateAndPushAfterSuccess}
            />
    </form>
    )
}