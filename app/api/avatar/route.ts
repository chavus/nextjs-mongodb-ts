import {BlobError, del, put, list} from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'
import { getNextErrorResponse } from '@/lib/nextErrorResponse'
import { BadRequestError, UnsupportedContentTypeError } from '@/lib/customErrors'

const SUPPORTED_CONTENT_TYPE = ['image/png', 'image/webp', 'image/jpeg', 'image/jpg']

// Try with form-data approach to see difference
// If not possible to get name from request, just rely on searchParam
// Do put and delete and error handling on client

export async function POST(request:NextRequest){
    const searchParams = request.nextUrl.searchParams
    const filename = searchParams.get('filename') 
    try{
        if (!filename){
            throw new BadRequestError('File name required in query params')
        }
        else if(!Number(request.headers.get('content-length'))){
            throw new BadRequestError('Image not attached or empty')
        }
        else if (!request.headers.get('content-type') 
            || !SUPPORTED_CONTENT_TYPE.includes(request.headers.get('content-type') as string)){
            throw new UnsupportedContentTypeError()
        }
        
        const putRes = await put(filename, request.body as ReadableStream, {
            access:'public'
        })
        return new NextResponse(JSON.stringify(putRes), {status:201})
    }catch(error){
        return getNextErrorResponse(error)
    }    
}

export async function DELETE(request:NextRequest){
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    try{
        if (!url){
            throw new BadRequestError('Blob URL required in query params')
        } 
        await del(encodeURI(url))
        return new NextResponse()
    }catch(error){
        if(error instanceof BlobError && error.message == 'Vercel Blob: Some urls are malformed'){
            return new Response(JSON.stringify({message:'Url is malformed'}),{status:400})
        }
        return getNextErrorResponse(error)
    }

}

export async function GET(){
    const lista = await list()
    return new NextResponse(JSON.stringify((await list()).blobs))
}