import Button from "@/components/elements/Button"
import Link from "next/link"
import { type IStudent } from "@/models/student"
import Image from 'next/image'
import { placeholder } from "@/assets/profileImagePlaceholder"

// https://www.byrdie.com/thmb/_nU1tZv2sot2tC_V1y5PhNk46jA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Face-Mapping-191d3a2073e146d981c1626b39e8a227.png

export default function StudentCard({student, showEdit, showDetails}:{student:IStudent, showEdit:boolean, showDetails:boolean}){

    return (
    <div className="grow max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-2 flex items-center">
            <div className="w-16 h-16 min-w-[64px] rounded-full overflow-hidden relative mr-3">
                {/* <Image className="object-cover" fill src={profilePic} alt={student.fullName}/> */}
                {/* <Image className="object-cover" fill src='https://www.byrdie.com/thmb/_nU1tZv2sot2tC_V1y5PhNk46jA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Face-Mapping-191d3a2073e146d981c1626b39e8a227.png' alt={student.fullName}/> */}
                {/* <Image className="object-cover" fill src='https://www.corporatephotographerslondon.com/wp-content/uploads/2021/07/LinkedIn_profile_photo_sample_1-300x300.jpg' alt={student.fullName}
                    placeholder={placeholder} /> */}
                <Image className="object-cover" fill sizes='(min-width: 640px) 50vw' src={student.profileImageUrl || placeholder} alt={student.fullName}
                    placeholder={placeholder} />
            </div>
            <div>
                <h5 className="text-xl font-bold tracking-tight dark:text-white">{student.fullName}</h5>
                {showDetails && 
                <p className="font-sm text-gray-700 dark:text-gray-400">{student.major}</p>}
            </div>

        </div>
        

        <div className="flex justify-between items-center">
        {showEdit &&
            <Link href={`/sw-edit-student/${student.id}`}>
                <Button  className="inline-flex items-center">
                    Edit
                    <svg className="w-3 h-3 ml-1 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"/>
                    </svg>
                </Button>
            </Link>    
        }
        {showDetails && 
        <span className="bg-primary-100 text-primaryMain text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primaryInDark">{student.gpa}</span>}
        </div>
    </div>

)
}
