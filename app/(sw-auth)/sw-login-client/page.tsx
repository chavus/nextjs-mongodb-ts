'use client';
import 'flowbite';
import ButtonCustom from '@/components/elements/ButtonCustom'
import Button from '@/components/elements/Button'
// import Alert from '@/components/elements/Alert';
import SwIcon from '@/components/SwIcon';
import { useState, useRef, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { Alert } from 'flowbite-react';

export default function Login({searchParams}:{searchParams:{callbackUrl:string, error:string}}){

    const [error,setError] = useState<null | string>(null)
    const [isLoading, setIsLoading] = useState(false)
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const router = useRouter()

    async function onLogInClick() {
        setIsLoading(true)
        const signInRes = await signIn('credentials',{redirect:false, callbackUrl:searchParams.callbackUrl || '/sw-home', username:username.current?.value, password:password.current?.value})
        setIsLoading(false)
        if (signInRes?.error == null){
            router.push(searchParams.callbackUrl || '/sw-home')
        }
        setError(signInRes?.error || null)
    }

    useEffect(()=>{
        // Improve error handling from queryParams
        searchParams.error && setError(searchParams.error)
    },[])

    function clearError(){
        setError(null)
    }

    return(
    <form className="flex h-screen flex-col justify-center items-center">
        <SwIcon className='mb-4 w-20 h-20 md:w-32 md:h-32'/>        
        <div className=" mb-6 text-4xl font-extrabold max-w-md text-center">Welcome to the Students Web</div>
        <div className='flex flex-col max-w-xs w-full '> 

            {error &&  (error === 'SessionRequired' ? 
                // <Alert closeFn={clearError}>{error === 'CredentialsSignin' ? 'Incorrect credentials. Verify your information and try again.' : `Unable to log in. Error: ${error}`}</Alert>
                <Alert color='warning' onDismiss={clearError}>Log in to access page.</Alert>
                :
                <Alert color='failure' onDismiss={clearError}>{error === 'CredentialsSignin' ? 'Incorrect credentials. Verify your information and try again.' : `Unable to log in. Error: ${error}`}</Alert>)
            }

            <div className="mb-3">
                <label htmlFor="username" className="block mb-2 text-sm font-medium ">Enter username</label>
                <input name="username" type="text" id="username" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="ausername" required ref={username}/>
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Password</label>
                <input name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500" required ref={password}/>
            </div>
        </div>

        <div className='flex flex-col w-full max-w-[12rem] '>
            <Button color='primary' className='mb-3' onClick={onLogInClick} disabled={isLoading} isProcessing={isLoading}>Log In</Button>
            <ButtonCustom outline><a href="/sw-signup">Create account </a></ButtonCustom> 
        </div>
    </form>
    )
}

