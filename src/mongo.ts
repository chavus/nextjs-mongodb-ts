import { Schema, model, connect } from "mongoose";

const uri = "mongodb+srv://nojiso:tqYtKaGUro029gUt@cluster0.7nk7le0.mongodb.net/?retryWrites=true&w=majority";

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

const User = model<IUser>('User', userSchema)

run().catch(err => console.log(err));

async function run() {
    await connect(uri)

    const user = new User({
        name:"Juan",
        age:10,
        profession:"Engineer"
    })

    await user.save();

    console.log(user.age)

}