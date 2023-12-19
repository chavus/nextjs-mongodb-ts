'use client'
import { placeholder } from "@/assets/profileImagePlaceholder"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function ProfileImage({src, alt, ...props}:{src:string, alt:string} ){

    const [error, setError] = useState(false)

    function onerror(){
        setError(true)
        console.log('Problem retrieving src image: ', src, '. Adding placeholder instead.')
    }

    useEffect(()=>{
        setError(false)
    }, [src])

    return(

        // Tried to use html img component with onError but due to SSR fallback image doesnt load on refresh. 

        <Image className="object-cover" fill 
        src={!error? src : placeholder} 
        alt={alt}
        onError={onerror}
        placeholder={placeholder}
        unoptimized // To avoid img generation on NextJs and cache behavior
        {...props}
        /> 
    )
}