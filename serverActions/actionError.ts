import mongoose from "mongoose";

export interface ActionError {
    error?:{message:string
            validationErrors?:{}[]}
}

export function getActionError(error: any, genericErrorMessage?: string) {
    const actionError: ActionError = { error: { message: 'Unknown error' } };
    // Validation Errors
    if (error instanceof mongoose.Error.ValidationError) {
        actionError.error = {
            message: 'Action failed with validation errors',
            validationErrors: _getValidationErrors(error)
        };
    } else {
        actionError.error!.message = genericErrorMessage || 'Operation failed. Try again later.';
        console.log(error); // Replace for logging
    }
    return actionError;
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
