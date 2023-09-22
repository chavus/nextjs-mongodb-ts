import { IUser } from "@/models/user";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt"


declare module "next-auth"{
    // type User = Partial<IUser>

    interface User{
      id:string,
      username:string,
      isAdmin: boolean
    }

    interface Session{
        user:User
    }
}

// declare module "next-auth/jwt" {
//     /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//     interface JWT {
//       /** OpenID ID Token */
//       idToken?: string
//     }
//   }