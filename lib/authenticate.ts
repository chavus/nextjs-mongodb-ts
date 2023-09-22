import User from "@/models/user"
import { sign } from '@/lib/authJose'
// import User from "@/models/user";

export default async function signIn(username:string, password:string):Promise<{user:any; jwt:string} | null>{
    const user = await User.getByUsername(username)
    if (user && await user.isPasswordCorrect(password)){   
        console.log('Signing in');
        console.log(user.toObject());
        
        return {user: user.toObject(), jwt: await sign(user.toObject())}
    }
    return null
}