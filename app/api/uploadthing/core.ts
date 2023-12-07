import { createUploadthing, type FileRouter } from "uploadthing/next";
import * as _uploadthing_shared from '@uploadthing/shared';
import { getServerSession } from "next-auth";

const uploader = createUploadthing();
  
// FileRouter for your app, can contain multiple FileRoutes
// https://docs.uploadthing.com/getting-started/appdir#creating-your-first-fileroute

const MAX_FILE_SIZE = "2MB"

const fileRouterInput:_uploadthing_shared.FileRouterInputConfig = {
    "image/jpeg": {
        maxFileSize: MAX_FILE_SIZE
    },
    "image/png": {
        maxFileSize: MAX_FILE_SIZE
    },
    "image/webp":{
        maxFileSize: MAX_FILE_SIZE
    }
}

export const ourFileRouter = {
    profilePicture: uploader(fileRouterInput)
    .middleware(async ({req, res}) =>{
        console.log('In router middleware: ', new Date())

        const session = await getServerSession()
        if (!session){
            throw new Error("Access denied. Must be logged in to upload files")
        }
        // const body = await req.json()
        // console.log(body)
        return { user: session.user.username}
    })
    .onUploadComplete(({ file, metadata }) => {
        console.log('in onUploadComplete: ', new Date())
        // console.log('metadata: ', metadata);
        // ^?
        console.log("upload completed", file);
      }),
    // .onUploadComplete((data) => console.log("Upload complete, file", data)),

    // imageUploaderRep: uploader({ pdf: { maxFileSize: "128KB" } })
    // .onUploadComplete(async ({metadata, file })=>{
    //   console.log('Upload complete: ', file.url)
    //   return {fileUrl: file.url}
    //   })

} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;