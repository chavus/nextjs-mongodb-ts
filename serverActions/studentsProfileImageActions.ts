'use server'

import { UTApi } from "uploadthing/server";
import {profileImageConfig} from '@/app.config'
import { getResponseError } from "./actionResponseError";
import { type ActionResponse } from "@/global";

const utapi = new UTApi({
    apiKey:process.env.UPLOADTHING_SECRET // Must be set to work in Vercel deployment
})

/**
 * 
 * @param formDataWithProfileImage FormData object including "profileImage" key with profile image File as value
 * @returns 
 */
export async function uploadProfileImage(formDataWithProfileImage:FormData):Promise<ActionResponse<{url:string}>>{
    
    try{
        const file = formDataWithProfileImage.get('profileImage') as File
        if (!profileImageConfig.supportedTypes.includes(file.type)){
            return getResponseError('File type not supported.')
        } else if(file.size > profileImageConfig.maxSizeLimit){
            return getResponseError('File size exceeded max limit.')
        }        
        const res = await utapi.uploadFiles(file)
        if (res.data?.url){
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
            // Failing to delete image from bucket should not block action on client. 
            console.log(getResponseError('Failed to delete profile image'))
        }
    }catch(error){
        console.log(getResponseError('Failed to delete profile image', error))
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