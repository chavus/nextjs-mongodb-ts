
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