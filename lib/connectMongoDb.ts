import { log } from "console";
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI){
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

/**
 * APPROACH WITH CONNECTION CACHED FOR HOT RELOADS DURING DEV 
 * Referring to https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.js 
 * */ 

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */

let cached = global.mongoose

if (!cached){
    global.mongoose = {conn:null, promise:null}
    cached = global.mongoose
}


export default async function connectMongoDb(){ 

    // If there is a connection in cache
    if (cached.conn){
        return cached.conn
    }

    // If there is no connection and not promise in cache
    if (!cached.promise){
        console.log('Connecting to MongoDB')
        cached.promise = mongoose.connect(MONGODB_URI)
    }

    try{
        cached.conn = await cached.promise
    } catch(e){
        cached.promise = null;
        throw e
    }

    return cached.conn

}


// connectMongoDb()

// BASIC APPROACH, creates new connection on each hot reload during dev

// let dbConn: Mongoose;

// export default async function connectMongoDb(){ 

//     if (dbConn){
//         log('Returning existing connection')
//         return dbConn
//     }

//     log('Creating new connection')
//     dbConn = await mongoose.connect(MONGODB_URI)
//     // log('connections: ', dbConn.connections)
//     log('readyState: ', dbConn.connection.readyState)
//     return dbConn;
// }