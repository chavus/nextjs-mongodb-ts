'use client';
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import LogOutButton from "./LogOutButton";
import { Session } from "next-auth";
import Link from "next/link";

export default function NavBarAvatarAndMenu({session}:{session:Session}){

    // Required to register eventListeners on redirects, etc
    useEffect(()=>{
        initFlowbite()
    },[])

    return (
        <>
        <div id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="cursor-pointer relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
        </div>

        
        <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{session.user?.username}</div>
            </div>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
                <Link prefetch={false} href={'sw-edit-user/' + session.user?.username} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit profile</Link>
            </li>

            </ul>
            <div className="py-1">
                <LogOutButton/>
            </div>
        </div>
    </>
    )
}