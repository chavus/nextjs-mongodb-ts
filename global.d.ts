
export declare global {
    var mongoose:{conn:Mongoose|null, promise?:Promise<Mongoose>|null};
}

type ActionError = {message:string, errors?:{}[]}

// type ActionResponse = void | {data:{}} | ActionError
interface ActionResponse<Data={}> {
    data?:Data
    error?:ActionError
}

