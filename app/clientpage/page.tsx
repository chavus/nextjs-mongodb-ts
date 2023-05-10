'use client';

import { useRouter } from "next/navigation";



export default function ExportClient(){

    const router = useRouter();


    return <button onClick={()=>router.push('/subdir')}>Go to subdir</button>
}