
export class NotFoundError extends Error{
    constructor(message:string){
        super(message);
        this.name = 'NotFoundError'
    }
}

export class NotAuthorizedError extends Error{
    constructor(message:string){
        super(message);
        this.name = 'NotAuthorizedError'
    }
}

export class UnsupportedContentTypeError extends Error{
    constructor(message:string='Request body Content-Type not supported'){
        super(message);
        this.name = 'UnsupportedContentTypeError'
    }
}

export class BadRequestError extends Error{
    constructor(message?:string){
        super(message);
        this.name = 'BadRequestError'
    }
}

