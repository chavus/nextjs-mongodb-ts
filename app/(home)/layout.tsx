import SwIcon from "@/components/SwIcon"
import Button from "@/components/elements/ButtonCustom"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import NavBarAvatarAndMenu from '@/components/NavBarAvatarAndMenu';
import Link from "next/link";

export default async function HomeLayout({
    children
}:{
    children:React.ReactNode
}) {

    const session = await getServerSession(authOptions)
    
    return (
        <>
        
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <Link href="/sw-home" className="flex items-center mr-2">
                    <SwIcon className="h-8 w-8 mr-2"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        StudentsWeb
                    </span>
                </Link>

                <div className="flex md:order-2 items-center">
                    <Button className="px-2.5 py-2.5 mr-2" pill>
                        <svg className="w-5 h-5 mr-2 hidden md:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z"/>
                        </svg>
                        <svg className="w-4 h-4  md:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        <span className="hidden md:inline">Add Student</span>
                    </Button>

                    {!session && <Link className=" hidden md:inline-flex" href="/sw-login-client"><Button outline>Log In</Button></Link>}

                    <button data-collapse-toggle="navbar-cta" type="button" className="mr-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                        <span className="sr-only text-pr">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    {session &&
                        <NavBarAvatarAndMenu session={session}/>
                    }


                </div>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                        <Link href="/sw-home" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryMainHover md:p-0 md:dark:hover:text-primaryMainHoverInDark dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Students</Link>
                    </li>
                    <li>
                        <Link href="/sw-details" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primaryMainHover md:p-0 md:dark:hover:text-primaryMainHoverInDark dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Details</Link>
                    </li>
                    {!session && <>
                        <li className="block py-2 pl-3 md:hidden">
                            <Link href="/sw-login-client"><Button outline>Log In</Button></Link>
                        </li>
                        </>
                    }
                    </ul>
                </div>
        </div>
        </nav>
        <section className='p-4'>{children}</section>        
        </>
    )

}
