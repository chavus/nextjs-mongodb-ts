import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { BadRequestError, NotAuthorizedError, NotFoundError, UnsupportedContentTypeError } from "./customErrors";

export function getNextErrorResponse(error:Error | unknown){

    let responsePayload:{message?:string,errors?:{}[]} = {}
    let httpStatus:number=500

    // Following suggested format: https://github.com/cryptlex/rest-api-response-format
    if (error instanceof mongoose.Error.ValidationError){ //Fail
        responsePayload = {
            message:'Request failed with validation errors',
            errors:getValidationErrors(error)
        }
        httpStatus=400
    } else if (error instanceof NotFoundError){ //Fail
        responsePayload.message = error.message
        httpStatus=404
    } else if (error instanceof NotAuthorizedError){ //Fail
        responsePayload.message = error.message
        httpStatus=401
    } else if (error instanceof UnsupportedContentTypeError){
        responsePayload.message = error.message
        httpStatus=415
    } else if (error instanceof BadRequestError){
        responsePayload.message = error.message
        httpStatus=400
    } 
    else { //Unhandled Error
        console.log(error) // To be added to logging
    } 

    return new NextResponse( // New NextResponse object to add status and other properties
    Object.keys(responsePayload).length == 0 ? null : JSON.stringify(responsePayload), 
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