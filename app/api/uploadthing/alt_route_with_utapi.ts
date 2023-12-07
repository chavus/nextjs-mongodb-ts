// import { createNextRouteHandler } from "uploadthing/next";
 
// import { ourFileRouter } from "./core";
 
// // Export routes for Next App Router
// export const { GET, POST } = createNextRouteHandler({
//   router: ourFileRouter,
// });

import { UTApi } from "uploadthing/server";
import { NextRequest, NextResponse } from "next/server";
 
export const utapi = new UTApi();

export async function POST(request:NextRequest){
    const fileToUpload = (await request.formData()).get('file') as File
    console.log(fileToUpload)
    const res = await utapi.uploadFiles(fileToUpload)
    return new NextResponse(JSON.stringify(res))
    
}

export async function DELETE(){
    const res = await utapi.deleteFiles('1b8d408f-0603-49e7-8939-dbd97a0f1f8b-vi9z4x.jpg')
    return new NextResponse(JSON.stringify(res))
}