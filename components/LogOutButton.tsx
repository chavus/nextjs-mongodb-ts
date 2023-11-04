'use client';

import { signOut } from "next-auth/react";

export default function LogOutButton(){
    
    return <button onClick={()=>signOut()} type='button' className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
    
}