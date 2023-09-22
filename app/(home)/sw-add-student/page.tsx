import SwIcon from "@/components/SwIcon"
import { cookies } from 'next/headers';
import Button from '@/components/elements/ButtonCustom'

export default function AddStudent(){
    const csrf = cookies().get('next-auth.csrf-token')?.value.split('|')[0] // Not official way to get the csrf -> https://github.com/nextauthjs/next-auth/discussions/7256?sort=new#discussioncomment-5615926
    return (
        <form method='post' action='/api/auth/callback/credentials' className="flex h-screen flex-col items-center">
        <input name="csrfToken" type="hidden" defaultValue={csrf} />
        
        <div className="mb-4 text-xl font-bold max-w-xs w-full text-left ">Add/Edit student:</div>

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
                <label htmlFor="studentName" className="block mb-2 text-sm font-medium ">Student name</label>
                <input name="studentName" type="text" id="studentName" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required />
            </div>

            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bachelor:</label>
            <select id="countries" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>

            <div className="mb-3">
                <label htmlFor="gpa" className="block mb-2 text-sm font-medium ">GPA</label>
                <input name="gpa" type="number" id="gpa" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required />
            </div>

        </div>

        <div className='flex flex-col w-full max-w-xs '>
            <Button type="submit" className="mb-3">Add/Save</Button> 
            <Button color="danger" outline>Delete</Button> 

        </div>
    </form>
    )
}