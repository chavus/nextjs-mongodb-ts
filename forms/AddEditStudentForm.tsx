'use client'
// import mongoose from 'mongoose'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/elements/Button'
import ButtonCustom from '@/components/elements/ButtonCustom'
import {type IStudent} from '@/models/student'
import Alert from "@/components/elements/Alert";
import { addStudent, deleteStudent, editStudent } from '@/serverActions/studentActions';
import ConfirmationModal from '@/components/ConfirmationModal'
import revalidatePath from '@/serverActions/revalidatePath'
import { getDataToUpdate } from './formsUtils'
import Image from 'next/image'
import { placeholder } from '@/assets/profileImagePlaceholder'

import { uploadProfileImage, updateProfileImage, deleteProfileImage } from '@/serverActions/uploadThingsActions'
import { uploadFiles } from '@/lib/uploadthing'
import { ActionResponse } from '@/global'

interface IStudentForm extends IStudent{
    profileImageFile?:FileList | null 
}

interface profileImageHandler {
    source:'file' | 'url' | null 
    sourceData?: File | string | null
    toDisplay: string 
} 
export default function AddEditStudentForm({student}:{student?:IStudent}){
    const [isSaving, setIsSaving] = useState(false)
    const [openAddEditSuccessModal, setOpenAddEditSuccessModal] = useState(false);
    const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] = useState(false);
    const [openDeleteSuccessModal, setOpenDeleteSuccessModal] = useState(false);
    const router = useRouter();
    const [profileImage, setProfileImage] = useState<profileImageHandler>(
        student?.profileImageUrl 
        ? {source:'url', sourceData: student.profileImageUrl, toDisplay: student.profileImageUrl}
        : {source:null, toDisplay:placeholder}
        )

    const {
        register,
        watch,
        handleSubmit,
        clearErrors,
        setError,
        resetField,
        formState:{errors, dirtyFields}
    } = useForm<IStudentForm>({
        reValidateMode:'onSubmit',
        defaultValues: student ? student : {}
    })

    const formFields = {
        fullName: register('fullName',{required:"Required field.", onChange:()=>clearErrors('fullName')}),
        major:register('major', {required:"Required field.",onChange:()=>clearErrors('major')}),
        gpa:register('gpa', {required:"Required field.",
                             min:{value:0, message:"Enter value between 0 and 4"}, 
                             max:{value:4, message:"Enter value between 0 and 4"}, 
                             onChange:()=>clearErrors('gpa')}),
        profileImageFile:register('profileImageFile')
    }


    // DONE: Replicate maxSize error and create bug
    // DONE: upload, Update, delete
    // Client validation of image size and type
    // Performance and loaders. When uploading image, in between pages, after adding students, etc
    // Refactor studentsAction with new actionResponse
    // Clean up

    async function onSave(data:IStudentForm){
        let dataToUpdate:any
        let actionResp:any
        let otherError
        setIsSaving(true)

        delete data.profileImageFile
        if (student){
            dataToUpdate = getDataToUpdate(data, dirtyFields,['profileImageFile'])
            // updateImage
            if (profileImage.source === 'file'){
                const formDataWithProfileImage = new FormData()
                formDataWithProfileImage.append('profileImage',profileImage.sourceData as File)

                let uploadRes
                if(student.profileImageUrl){
                    uploadRes = await updateProfileImage(student.profileImageUrl, formDataWithProfileImage)
                }else{
                    uploadRes = await uploadProfileImage(formDataWithProfileImage)
                }
                if (uploadRes.data?.url){
                    dataToUpdate.profileImageUrl = uploadRes.data.url
                }else{
                    otherError = uploadRes.error?.message || 'Unable to upload profile image file. Confirm supported types and size.'
                }
            } else if(profileImage.source === null && student.profileImageUrl){ // remove existing image
                const res = await deleteProfileImage(student.profileImageUrl)
                if (res?.error){
                    otherError = res.error.message || 'Unable to update profile image'
                }
                dataToUpdate.profileImageUrl = null
            }
            if (!otherError){
                actionResp = await editStudent(student.id, dataToUpdate)
            }
        }else{
            if (profileImage.source === 'file'){
                const formDataWithProfileImage = new FormData()
                formDataWithProfileImage.append('profileImage',profileImage.sourceData as File)
                console.log('client start: ', new Date())
                const res = await uploadProfileImage(formDataWithProfileImage)
                if (res.data?.url){
                    console.log('client end: ', new Date())
                    data.profileImageUrl = res.data.url
                }else{
                    otherError = res.error?.message || 'Unable to upload profile image file. Confirm supported types and size.'
                }
            }
            if (!otherError){
                actionResp =  await addStudent(data)
            }
        }

        // Might be standardized in a function
        if (actionResp?.error && actionResp.error.validationErrors){
            const errors = actionResp.error.errors as any
            errors.forEach((error:{field:keyof typeof formFields, message:string}) => {
                setError(error.field,{message:error.message})
        });
        }else if (actionResp?.error || otherError){
            const errorMsg = actionResp?.error?.message || otherError
            setError('root', {message:'Error: ' + errorMsg})
        }else{
            setOpenAddEditSuccessModal(true)
        }
        setIsSaving(false)

        }

    // Profile Image Handler
    const profileImageInput = watch('profileImageFile')
    useEffect(()=>{
        if (profileImageInput?.item(0)){
            const file = profileImageInput.item(0) as File
            console.log(file)
            setProfileImage({source:'file', sourceData:profileImageInput.item(0) as File, toDisplay: URL.createObjectURL(profileImageInput.item(0) as File)}) 
        } 
    },[profileImageInput])

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

    function onRemoveImageClick(){
        const profileImageTmp: profileImageHandler = {source: null, toDisplay:placeholder}
        if (profileImage.source === 'file'){
            resetField('profileImageFile')
            if (student?.profileImageUrl){
                profileImageTmp.source = 'url'
                profileImageTmp.sourceData =  profileImageTmp.toDisplay = student?.profileImageUrl 
            }
        } 
        setProfileImage(profileImageTmp)

    }

    function revalidateAndPushAfterSuccess(){
        revalidatePath('/sw-details')
        revalidatePath('/sw-home')
        router.push('/sw-details')
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSave)} className="flex h-screen flex-col items-center">        
        <div className="mb-4 text-xl font-bold max-w-xs w-full text-left ">{student ? 'Edit ' : 'Add '} student:</div>

        {errors.root &&  <Alert closeFn={()=>clearErrors('root')}>{errors.root.message}</Alert>}

        {/* Image hanlder */}
        <div className="relative">
        <label htmlFor="profileImageFile" className='cursor-pointer'>
            <div className="w-32 h-32 min-w-[64px] rounded-full overflow-hidden relative mr-3">

                    <Image className="object-cover" fill sizes='(min-width: 640px) 50vw' src={profileImage.toDisplay} alt={'Some name'}
                        placeholder={placeholder} />
            </div>
        </label>
            {profileImage.source !== null
                &&
                <button type='button' onClick={onRemoveImageClick} className="absolute bottom-0 left-8 transform translate-y-1/4 w-7 h-7 bg-white border-2 border-white dark:border-gray-800 rounded-full">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                </svg>
                </button>
            }
        </div>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">PNG, JPG, JPEG or WEBP</p>
        <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
                    {errors.profileImageFile?.message}
        </p>
        <input {...formFields.profileImageFile } name="profileImageFile" className="hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="profileImageFile" type="file"/>
        {/*  */}

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
    </>
    )
}

async function apiUploadImage(file:File) {
    const response = await fetch(
        `/api/avatar?filename=${file.name}`,
        {
            method: 'POST',
            body: file,
        }
    )
    return await response.json()
}

async function apiDeleteImage(imageUrl:string){
    await fetch(
        `/api/avatar?url=${imageUrl}`,
        {
            method: 'DELETE'
        }
    )
}

async function apiUpdateImage(previousUrl:string, newFile:File){
    try{
        await apiDeleteImage(previousUrl)
    }catch(error){
        return 
    }
    return await apiUploadImage(newFile)
}
