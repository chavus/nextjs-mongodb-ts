// 'use client';
import 'flowbite';
// import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/elements/Button';

export const dynamic = 'force-dynamic'

export default function Sandbox(){

    // const [isPending, startTransition] = useTransition()

//   function onClick(){
//     startTransition(()=>
//     {
//         throw new Error('error from onClick')
//     })
//   }

throw new Error('error from sandboxpage')
  return (
    //   <Button onClick={onClick}>Throw error</Button>
      <Button >Throw error</Button>

  )

}