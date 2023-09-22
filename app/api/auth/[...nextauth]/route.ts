// nextauth authentication endpoint
import NextAuth, { AuthOptions, User as AuthUser, Session, SessionStrategy } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import User, { IUser } from "@/models/user"
// import signIn from "@/lib/authenticate"
import { JWT } from "next-auth/jwt/types"

// Refactor to use https://next-auth.js.org/configuration/initialization#route-handlers-app

// https://josemukorivo.com/blog/unlock-next-level-authentication-in-nextjs-with-next-auth-and-typescript-module-augmentation-1689

export const authOptions:AuthOptions = {
    providers:[
     CredentialsProvider({
        type:'credentials',
        name:"Credentials",
        credentials:{
            username:{label:"Username", type:"string"},
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req){
            // Add logic here to look up the user from the credentials supplied
            const {username, password} = credentials as {username:string, password:string}
            const user = await User.authenticate(username, password) // If you return null then an error will be displayed advising the user to check their details.
            if (!user) return null
            return {
                id:user.id,
                username:user.username,
                isAdmin:user.isAdmin
            }
        }
     })   
    ],
    pages:{
        signIn: '/sw-login-client',
    },
    session: {
        // Specs for user session, which is saved by default as jwt stored in the session cookie. 
        // strategy: <const>'jwt',
        // maxAge: 30 * 24 * 60 * 60, // 30 days
        maxAge: Number(process.env.JWT_TOKEN_EXPIRATION)
    },  
    callbacks: {
        jwt: async ({token, user, trigger, session}) => {
            // Used to modify the values in the token, when something different is required to pass to the token
            // Otherwise it will only pass default values
            // Data persisted in the server with token
            // Can be retrieved and decrypted by getToken() in the handlers.
            if (trigger === 'update' && session){ // To allow updates from client-side update(session)
                token.user = session.user
            } else if (user){
                token.user = user;
            }
            return token
        },
        session: async ({ session, token}) => {
            // Used to modify the values in the session, when something different is required to pass to the token
            // Otherwise it will only pass default values
            // Data persisted in the client side with session. Retrieved from client pages or components with useSession() hook.
            if (token){
                session.user = token.user as AuthUser;
            }
          return session;
        },
      },
}

const handler = NextAuth(authOptions)

// const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }