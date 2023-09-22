import connectMongoDb from "./lib/connectMongoDb";

// Referring to this tool: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
// https://github.com/vercel/next.js/discussions/11686#discussioncomment-5845716


// Connects to MongoDB on App initialization
export async function register(){

    if (process.env.NEXT_RUNTIME === "nodejs") {
        console.log('Starting inital connection to MongoDB');
        await connectMongoDb()
    }
   

}