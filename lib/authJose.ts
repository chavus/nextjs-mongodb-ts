// middleware only supports Edge libs, for example jose
import {SignJWT, jwtVerify, type JWTPayload} from 'jose';
import { NextRequest } from 'next/server';

const { JWT_SECRET, JWT_TOKEN_EXPIRATION } = process.env


export async function sign(payload:{}){
    const iat = Math.floor(Date.now() / 1000); // Issued at time
    const exp = iat + Number(JWT_TOKEN_EXPIRATION); 

    return await new SignJWT({...payload})
        .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
        .setExpirationTime(exp)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(JWT_SECRET));
}

export async function verify(request:NextRequest) {
    try{
        const token = request.headers.get('authorization')?.replace('Bearer ','') as string
        const {payload} = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return payload;
    } catch(e){
        return null
    }

}