"use client";
import SwIcon from "@/components/SwIcon";
import { cookies } from "next/headers";
import ButtonCustom from "@/components/elements/ButtonCustom";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { type IUser } from "@/models/user";
import { NextResponse } from "next/server";
import Alert from "@/components/elements/Alert";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Spinner, Modal } from "flowbite-react";
import Button from '@/components/elements/Button'

// Add new user
// Edit user
// Catch and display errors

//Aproach 1: routes -> https://jasonwatmore.com/next-js-13-app-router-mongodb-user-rego-and-login-tutorial-with-example#users-add-edit-tsx

// Use hook forms and validation library

// 1. Do the register object
// 2. Apply the validations client and server
// 3. Implement register
// error.root
// Change to modified react components
// pass generic props to components
// Validate fields against type, IUser vs confirmPassword
// Optimize formatDefaultValues
// Use dirtyFields to submit for update

// confirmations updated and create
//4. restrict to only logged in user -> Call component from parent page passing user
// Go back button

// CSRF token how to implement

interface UserFormData extends IUser {
  confirmPassword:string
} 

const userFormFields = ['username','password','fullName','isAdmin' ] 
function formatDefaultValues(user:{[index:string]:string|boolean}){
  //TO DO: Find a way to better format data for default values
  let defaultValues:{[index:string]:string|boolean} = {};
  if (user){
    userFormFields.forEach(field => {
      defaultValues[field] = user[field] == undefined ? '' : user[field]
    })
  }
  return defaultValues
}

export default function SignUp({user}:{user?:any}) {

  const [isLoading, setIsLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  
  const redirectUrl = user ? '/sw-home' : '/sw-login-client'

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    getValues,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm<UserFormData>({
    reValidateMode:'onSubmit',
    defaultValues: formatDefaultValues(user) ,
  });

  const formFields = {
    fullName: register("fullName", { required: "Required field.", onChange:()=>clearErrors('fullName')}),
    username: register("username", { required: "Required field.", onChange:()=>clearErrors('username') }),
    password: register("password", {
        required: {value: user ? false : true, message:"Required field."},
        minLength: {
            value: 6,
            message: "Password must be at least 6 chars long.",
        },
        validate:(value:string) => {
            if (watch('confirmPassword') != value){
                return "Passwords don't match."
            }
        },
        onChange:()=>clearErrors('password')
        }),
    isAdmin: register("isAdmin", { onChange:()=>clearErrors('isAdmin') }),
    confirmPassword: register("confirmPassword", {
      required: {value: user ? false : true, message:"Required field."},
      onChange:()=>clearErrors('confirmPassword')
    }),
  };

  
  async function onSubmit(data: Partial<UserFormData>) {
    delete data.confirmPassword
    let endpoint:string;
    let options:{}

    if (user){
      const dataToUpdate:any = {}; //TODO: Change to replace any
      // const dataToUpdate:Partial<UserFormData> = {}
      Object.keys(dirtyFields).filter(field => field !='confirmPassword').forEach(dirtyField =>{
        dataToUpdate[dirtyField as keyof FormData] = data[dirtyField as keyof UserFormData] 
      })
      endpoint = '/api/users/' + user.username
      options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToUpdate),
      };
    }else{
      endpoint = "/api/users";
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
    }

    setIsLoading(true)
    const response:NextResponse = await fetch(endpoint, options) as NextResponse;
    const responseObject = await response.json();
    if (response.status === 200){
      // Updated
      setOpenModal(true);
      // router.push("/sw-home");
    }else if (response.status === 201) {
      // Registered
      setOpenModal(true);
    } else if (response.status === 400 && responseObject.errors) {
        responseObject.errors?.forEach((error:{field:keyof typeof formFields, message:string}) => {
                setError(error.field,{message:error.message})
        });
    }else{
        setError('root',{message: 'Error: ' + responseObject.message ||  JSON.stringify(responseObject)})
    }
    setIsLoading(false)
  }

  return (
    <>
    
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-screen flex-col items-center"
    >
      {/* <input name="csrfToken" type="hidden" defaultValue={csrf} /> */}

      { !user && 
        <>
          <SwIcon className="mt-4 mb-2 w-20 h-20" />
          <div className="mb-4 text-2xl font-extrabold max-w-md text-center">
            StudentsWeb
          </div>
        </>
      }
      <div className="mb-4 text-xl font-bold max-w-xs w-full text-left ">
        { user ? "Edit your profile:" : "Register:"}
      </div>

      <div className="flex flex-col max-w-xs w-full ">
       

        {errors.root &&  <Alert closeFn={()=>clearErrors('root')}>{errors.root.message}</Alert>}
       
        <div className="mb-3">
          <label htmlFor="fullName" className="block mb-2 text-sm font-medium ">
            Full name
          </label>
          <input
            {...formFields.fullName}
            name="fullName"
            type="text"
            id="fullName"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="ausername"
          />
          <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
            {errors.fullName?.message}
          </p>
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="block mb-2 text-sm font-medium ">
            Username
          </label>
          <input
            {...formFields.username}
            name="username"
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="ausername"
          />
          <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
            {errors.username?.message}
          </p>
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            {...formFields.password}
            name="password"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
          <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <div className="mb-3">
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            {...formFields.confirmPassword}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
          />
        <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
            {errors.confirmPassword?.message}
          </p>
        </div>

        <div className="flex items-center mb-6">
          <input
            {...formFields.isAdmin}
            id="default-checkbox"
            type="checkbox"
            name="isAdmin"
            value="true"
            className="w-4 h-4 bg-gray-50 text-primary-600 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Is Admin?
          </label>
          <p className="mt-1 text-sm font-medium text-red-600 dark:text-red-500">
            {errors.isAdmin?.message}
          </p>
        </div>
      </div>

      <div className="mb-2 flex flex-col w-full max-w-xs ">
        <ButtonCustom type="submit" outline disabled={isLoading}>
          {isLoading && <Spinner className="mr-4"/>} {user ? 'Save' : 'Create account'}
        </ButtonCustom>
      </div>
    </form>

    <Modal show={openModal} size="md" popup onClose={() => router.push(redirectUrl)}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
        
        <svg className="mx-auto mb-4 w-14 h-14 text-green-700 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
          <h2 className="mb-5 text-lg font-bold text-green-700 dark:text-green-400">
            {user ? 'Profile updated' : 'Registration successful!'}
          </h2>
          { !user && <h3 className="mb-5 text-lg font-medium  dark:text-gray-300">
            Go to Log In page to access.
          </h3>}
          <div className="flex justify-center gap-4">
            <Button color="primary" onClick={() => router.push(redirectUrl)}>
              {user ? 'Ok' : 'Go to Log In'}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    
    </>
  );
}


  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
  //     // Traditional approach, with no form hooks, etc.
  //     event.preventDefault()
  //     const form = event.currentTarget
  //     const formElements = form.elements as typeof form.elements & {
  //         username: HTMLInputElement,
  //         password: HTMLInputElement,
  //         fullName: HTMLInputElement,
  //         isAdmin: HTMLInputElement
  //       }
  //     const JSONdata = JSON.stringify({
  //         username:formElements.username.value,
  //         password:formElements.password.value,
  //         fullName:formElements.fullName.value,
  //         isAdmin:formElements.isAdmin.checked,
  //         })
  //     const endpoint = '/api/users'
  //     const options ={
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSONdata
  //     }
  //     const response = await fetch(endpoint, options)
  //     console.log(response.status)
  //     if (response.status === 201){
  //         router.push('/sw-home')
  //     } else {
  //         // render errors
  //     }
  // }