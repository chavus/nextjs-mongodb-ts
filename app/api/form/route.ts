import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const formData = await request.formData();
    console.log(formData.get('password'))
    // return new NextResponse(
    //     JSON.stringify({
    //         password: formData.get('password')
    //     })
    // )
    // return new NextResponse(
    //     JSON.stringify({message:'POST form'})
    // )
    return NextResponse.redirect('http://localhost:3000/sw-home', 301)
}

export function GET(){
    return NextResponse.json({message:'Get all forms'})
}