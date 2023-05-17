import connectMongoDb from "./lib/connectMongoDb";

// Referring to this tool: https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
// https://github.com/vercel/next.js/discussions/11686#discussioncomment-5845716

export async function register(){

    if (process.env.NEXT_RUNTIME === "nodejs") {
        console.log('Starting connection to DB: MongoDB');
        await connectMongoDb()
    }
   

}