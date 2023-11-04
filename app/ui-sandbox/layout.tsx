'use client';

export default function Layout({
    children
}:{
    children:React.ReactNode
}){

    // throw new Error('Error at layout ')
    return(
        <>
        <h1>My Layout</h1>
        {children}
        </>
    )
}