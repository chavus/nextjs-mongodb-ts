import SwIcon from "@/components/SwIcon"
import { cookies } from 'next/headers';
import ButtonCustom from '@/components/elements/ButtonCustom'

// Add new user
// Edit user
// Catch and display errors

//Aproach 2: server actions


export default function SignUp(){
    const csrf = cookies().get('next-auth.csrf-token')?.value.split('|')[0] // Not official way to get the csrf -> https://github.com/nextauthjs/next-auth/discussions/7256?sort=new#discussioncomment-5615926
    return (
        <form method='post' action='/api/auth/callback/credentials' className="flex h-screen flex-col items-center">
        <input name="csrfToken" type="hidden" defaultValue={csrf} />
        
        <SwIcon className='mt-4 mb-2 w-20 h-20'/>
        <div className="mb-4 text-2xl font-extrabold max-w-md text-center">StudentsWeb</div>

        <div className="mb-4 text-xl font-bold max-w-xs w-full text-left ">Create/Edit new account:</div>

        <div className='flex flex-col max-w-xs w-full '> 

        {/* {searchParams.error === 'CredentialsSignin' &&  
        
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
        } */}


            <div className="mb-3">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium ">Full name</label>
                <input name="fullName" type="text" id="fullName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required />
            </div>

            <div className="mb-3">
                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Username</label>
                <input name="username" type="text" id="username" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required />
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input name="confirmPassword" type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
            </div>

            <div className="flex items-center mb-6">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 bg-gray-50 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Is Admin?</label>
            </div>

        </div>

        <div className='flex flex-col w-full max-w-xs '>
            <ButtonCustom type="submit" outline>Create account</ButtonCustom> 
        </div>
    </form>
    )
}