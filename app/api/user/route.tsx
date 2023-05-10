import { NextResponse } from "next/server";
log('importing connectMongoDB1')
import connectMongoDb from "@/utils/connectMongoDb";
log('importing connectMongoDB2')
import User from '@/models/user'
import { log } from "console";

export async function GET(){
    try{
        log('Calling connectMongoDb')
        await connectMongoDb()
    }catch(err){
        log(err)
    }

    const allUsers = await User.find({});
    // log(allUsers)


    // const user = new User({
    //     name:"Juan",
    //     age:10,
    //     profession:"Engineer"
    // })

    return NextResponse.json(allUsers)


    // return NextResponse.json({
    //     users:[
    //         {name:user.name, age:user.age},
    //         {name:'Pedro', age:18}
    //     ]
    // })
}