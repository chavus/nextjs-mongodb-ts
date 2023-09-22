// jsonwebtoken doesn't work in the middleware, since it is a node.js lib. 
// middleware only supports Edge libs, for example jose

import { NextRequest } from "next/server";
const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env


export async function isAuthenticated(request:Request | NextRequest){
    const token = request.headers.get('authorization') as string
    const verifiedJwt = await jwt.verify(token, JWT_SECRET)
    return verifiedJwt
}