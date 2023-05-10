import Link from "next/link"

export const metadata = {
    title: 'Subdir 2 page'
}

export default function subdir2(){
    
    return (
    <>  
        <h2>Subdir 2 header</h2>    
        <Link href='/subdir'>Subdir</Link>
    </>
    
    )


}