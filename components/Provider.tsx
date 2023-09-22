'use client'

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"

export default function Provider({children}:{children: React.ReactNode}){
    return (
        <SessionProvider>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </SessionProvider>
    )
}