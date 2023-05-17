import {Schema, model, models} from 'mongoose';


interface IUser{
    name:string,
    age:number,
    profession:string
}

const userSchema = new Schema<IUser>({
    name:{type:String},
    age:{type:Number},
    profession:{type:String}
})


export const User = models.User || model<IUser>('User', userSchema) 
 
export function getAllUsers(){
    return User.find({})
}
// export default User