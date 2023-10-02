import Link from "next/link"

export default function AccessDenied(){

    return (
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Access Denied</h1>
            
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, you don't have access to this page. Log in with the correct credentials</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href={"/sw-login-client"} className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Go to Log In page</a>
            <a href={"/sw-home"} className="text-sm font-semibold text-gray-900">Go to Home</a>
            {/* <a href="/sw-home" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go to </a> */}
            </div>
        </div>
        </main>
    )

}