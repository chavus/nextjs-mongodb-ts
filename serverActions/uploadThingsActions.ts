'use server'
import { UTApi } from "uploadthing/server";
import { getResponseError } from "./responseError";
import { ActionResponse } from "@/global";

const utapi = new UTApi()

const SUPPORTED_TYPES = ['image/jpeg', 'image/png', 'image/webp']
const MAX_FILE_SIZE = 2000000 // In bytes

/**
 * 
 * @param formDataWithProfileImage FormData object including "profileImage" key with profile image File as value
 * @returns 
 */
export async function uploadProfileImage(formDataWithProfileImage:FormData):Promise<ActionResponse<{url:string}>>{
    
    try{
        const file = formDataWithProfileImage.get('profileImage') as File
        console.log('file in server: ', new Date(), ' ->', file)

        if (!SUPPORTED_TYPES.includes(file.type)){
            return getResponseError('File type not supported.')
        } else if(file.size > MAX_FILE_SIZE){
            return getResponseError('File size exceeded max limit.')
        }        
        const res = await utapi.uploadFiles(file)
        if (res.data?.url){
            console.log('file uploaded in server: ', new Date())
            return {data:{url:res.data.url}} 
        }else {
            console.log(res.error) // Add to logging
            return getResponseError('Failed to upload profile image. Check size and format.')
        }
    }catch(error){        
        return getResponseError('Failed to upload profile image. Check size and format.', error)
}
}

export async function deleteProfileImage(imageUrl:string):Promise<void | ActionResponse>{
    try{
        const fileKey = imageUrl.split('/').slice(-1)[0]
        const res = await utapi.deleteFiles(fileKey)
        if (!res.success){
            return getResponseError('Failed to delete profile image')
        }
    }catch(error){
        return getResponseError('Failed to delete profile image', error)
    } 
}

export async function updateProfileImage(imageUrl: string, formDataWithProfileImage:FormData):Promise<ActionResponse<{url:string}>>{
    try{
        const resDelete = await deleteProfileImage(imageUrl)
        if (resDelete?.error){
            console.log(resDelete.error) // Add to logging
            return getResponseError('Failed to update profile image')
        }
        return await uploadProfileImage(formDataWithProfileImage)
    }catch(error){
        return getResponseError('Failed to updated profile image', error)
    }
}