"use client"

import React from 'react'
import { useTheme } from "next-themes";


const DarkToogleButton = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
            className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-2 text-md rounded-lg'>
            Toggle Theme
        </button>
    )
}

export default DarkToogleButton