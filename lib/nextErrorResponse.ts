import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { NotAuthorizedError, NotFoundError } from "./customErrors";

export function getNextErrorResponse(error:Error | unknown){

    let responsePayload:{message:string,errors?:{}[]} = {
        message:'Unknown error'
        }
    let httpStatus:number=500

    // Following suggested format: https://github.com/cryptlex/rest-api-response-format
    if (error instanceof mongoose.Error.ValidationError){ //Fail
        responsePayload = {
            message:'Request failed with validation errors',
            errors:getValidationErrors(error)
        }
        httpStatus=400
    } else if (error instanceof NotFoundError){ //Fail
        responsePayload = {
            message: error.message
        }
        httpStatus=404
    } else if (error instanceof NotAuthorizedError){ //Fail
        responsePayload = {
            message: error.message
        }
        httpStatus=401
    } else if (error instanceof Error){ //Error
        responsePayload.message = error.message
    } 

    return new NextResponse( // New NextResponse object to add status and other properties
    JSON.stringify(responsePayload), 
    {status:httpStatus})
}

// function getValidationErrors(error:mongoose.Error.ValidationError){
//     const validationErrors:{[key:string]:string}={}
//     for (const key in error.errors){
//         const errorObject = (error.errors[key] as mongoose.Error.ValidatorError).properties
//         validationErrors[key] = errorObject.message
//     }
//     return validationErrors
// }

function getValidationErrors(error:mongoose.Error.ValidationError){
    const validationErrors:{}[]=[]
    for (const key in error.errors){
        const errorObject = (error.errors[key] as mongoose.Error.ValidatorError).properties
        validationErrors.push({
           field: errorObject.path,
           message:errorObject.message
        })
    }
    return validationErrors
}