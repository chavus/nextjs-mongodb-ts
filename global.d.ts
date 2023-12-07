
export declare global {
    var mongoose:{conn:Mongoose|null, promise?:Promise<Mongoose>|null};
}

// type ActionError = {error:{message:string, errors?:{}[]}}
type ActionError = {message:string, errors?:{}[]}

// type ActionResponse = void | {data:{}} | ActionError
interface ActionResponse<Data={}> {
    data?:Data
    error?:ActionError
}
// type ActionResponse = {data:{}} | {error:{message:string, errors?:{}[]}}