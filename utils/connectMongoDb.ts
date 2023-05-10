import { log } from "console";
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI){
    throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

declare global {
    var mongoose:{conn?:Mongoose, promise?:Promise<Mongoose>};
}


let cached = global.mongoose


log('In Between cached and !cached')
log(!!cached?.conn)

if (!cached){
    log('Adding mongoose to global')
    global.mongoose = {}
    cached = global.mongoose
}

// const uri = "mongodb+srv://nojiso:tqYtKaGUro029gUt@cluster0.7nk7le0.mongodb.net/?retryWrites=true&w=majority";

export default async function connectMongoDb(){

    // If there is a connection in cache
    if (cached.conn){
        log('Returning cached connection')
        // log(cached)
        return cached.conn
    }

    // If there is no connection and not promise in cache
    // if (!cached.promise){
        if (true){

        log('No connection nor promise in cache. Creating new connection')
        cached.promise = mongoose.connect(MONGODB_URI)
                                    .then((mongooseCon) => 
                                            {return mongooseCon})

    }

    try{
        log('Waiting for connection promise to complete')
        cached.conn = await cached.promise
    } catch(e){
        log('Connection failed')
        throw e
    }

    log('Returning new connection')
    return cached.conn

}
