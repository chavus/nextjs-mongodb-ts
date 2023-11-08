// Not finished page, not working fully corretly
'use client';
import 'flowbite';
import ButtonCustom from '@/components/elements/ButtonCustom'
import Button from '@/components/elements/Button'
import SwIcon from '@/components/SwIcon';
import { getCsrfToken, signIn } from 'next-auth/react';
import Link from 'next/link';


// TODO: How to get CsrfToken from server component, besides with cookies() which is not retrieved on first load.
// How to manage default redirects

export default async function Login({searchParams}:{searchParams:{error:string}}){

    // const csrf = cookies().get('next-auth.csrf-token')?.value.split('|')[0] // Not official way to get the csrf -> https://github.com/nextauthjs/next-auth/discussions/7256?sort=new#discussioncomment-5615926
    
    return(
    <form method='post' action='/api/auth/callback/credentials' className="flex h-screen flex-col justify-center items-center">
        <input name="csrfToken" type="hidden" defaultValue={await getCsrfToken()} />


        <SwIcon className='mb-4 w-20 h-20 md:w-32 md:h-32'/> 
        
        <div className=" mb-6 text-4xl font-extrabold max-w-md text-center">Welcome to the Students Web</div>

        <div className='flex flex-col max-w-xs w-full '> 

        {searchParams.error === 'CredentialsSignin' &&  
        
            <div id="alert-2" className="flex items-center p-4 mb-3 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">
                    Incorrect credentials. Verify your information and try again.
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        }


            <div className="mb-3">
                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Enter username</label>
                <input name="username" type="text" id="username" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
                <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>
        </div>

        <div className='flex flex-col w-full max-w-[12rem] '>
            <Button color='primary' type='submit' className='mb-3'>Log In</Button>
            <ButtonCustom outline><Link href="/sw-signup">Create account </Link></ButtonCustom> 
        </div>
    </form>
    )
}


// Doesnt work for App Folder, nextjs 13
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const csrf = await getCsrfToken(context)
//     console.log("csrf value: ", csrf)
//     return {
//       props: {
//         csrfToken: csrf,
//       },
//     }
//   }

