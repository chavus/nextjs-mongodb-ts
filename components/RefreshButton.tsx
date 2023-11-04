'use client'
import ButtonCustom from "./elements/ButtonCustom"
import { useRouter } from "next/navigation"
export default function RefreshButton(){
    const router = useRouter()
    return(
        <ButtonCustom onClick={router.refresh}>Refresh</ButtonCustom>
    )
}