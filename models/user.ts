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


 const User = models.User || model<IUser>('User', userSchema) 
 
 export default User