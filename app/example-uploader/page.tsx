"use client";
 
import { UploadButton } from "./UTbuttons";
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="profilePicture"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log('In onClientUploadComplete: ', new Date())
          console.log("Res: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}