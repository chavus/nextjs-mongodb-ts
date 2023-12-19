import mongoose from "mongoose";
import { ActionError } from "@/global";



/**
 * 
 * @param errorMessage {string} Message to be added to ActionError
 * @param error {any} Any error object to be handled by function
 * @returns 
 * 
 * @example
 * await getResponseError('File not supported.')
 * await getResponseError(undefined, validationErrorObject)
 */
export function getResponseError(errorMessage?: string, error?: any ) {
    const responseError:{error:ActionError} = { error: { message: 'Action failed.' } };
    // Validation Errors
    if (error && error instanceof mongoose.Error.ValidationError) {
        console.log(error) // Add to logging
        responseError.error = {
            message: 'Action failed with validation errors',
            errors: _getValidationErrors(error)
        };
    } else {
        if (errorMessage){
            responseError.error.message = errorMessage
            console.log(errorMessage) // Add to logging
        }        
        error && console.log(error) // Add to logging
    }
    return responseError;
}

function _getValidationErrors(error: mongoose.Error.ValidationError) {
    const validationErrors: {}[] = [];
    let validationErrorObject: { field: string; message: string; };
    let errorObject;
    for (const key in error.errors) {
        if (error.errors[key] instanceof mongoose.Error.ValidatorError) {
            errorObject = (error.errors[key] as mongoose.Error.ValidatorError).properties;
            validationErrorObject = {
                field: errorObject.path as string,
                message: errorObject.message
            };
        } else if (error.errors[key] instanceof mongoose.Error.CastError) {
            errorObject = error.errors[key];
            validationErrorObject = {
                field: errorObject.path as string,
                message: `Make sure you are entering a ${errorObject.kind}. If error persists, contact support.`
            };
        } else {
            errorObject = error.errors[key];
            validationErrorObject = {
                field: errorObject.path as string,
                message: `Unknown error with this field. Please try again or contact support.`
            };
        }
        validationErrors.push(validationErrorObject);
    }
    return validationErrors;
}
