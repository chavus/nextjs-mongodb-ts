'use client';

export default function Layout({
    children
}:{
    children:React.ReactNode
}){

    return(
        <>
        <h1>My Layout</h1>
        {children}
        </>
    )
}