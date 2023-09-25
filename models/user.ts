import {Schema, Model, Document, model, models, HydratedDocument} from 'mongoose';
// import uniqueValidator from 'mongoose-unique-validator'
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('@/lib/bcrypt')

// Interfaces
export interface IUser {
    username:string;
    password:string;
    fullName?:string;
    age?:number;
    profession?:string;
    isAdmin:boolean
}

export interface IUserDocument extends IUser, Document{ // Includes document/instance methods as types
    update(partialUser:Partial<IUser>):Promise<void>;
    isPasswordCorrect(password:string):Promise<boolean>;
}

interface UserModel extends Model<IUserDocument> { // Declare static method types
    add(user:IUser):Promise<void>;
    getAll():Promise<IUserDocument[]>;
    getByUsername(username:string):Promise<IUserDocument | null>;
    authenticate(username:string, password:string):Promise<IUserDocument | null>;

}

// Schema
const userSchema = new Schema<IUserDocument>({
    // __v:{type:Number, select:false}, // select:false to hide field/path from query results
    username:{
        type:String, 
        required:[true, 'Username is required'],
        unique:true,
        },
    password:{type:String, required:[true, 'Password is required'], select:false},
    isAdmin:{type:Boolean, default:false},
    fullName:{type:String},
    profession:{type:String},
    age:{type:Number},
})

userSchema.plugin(uniqueValidator, {message:'{PATH} already exists.'}); // To handle unique condition of fields

userSchema.pre('save', async function(next){
    const user = this;    
    if (!user.isModified('password')) return next() // To avoid encrypting password on each update https://stackoverflow.com/questions/45372509/mongoose-changes-password-every-time-i-save-with-pre-save-hook
    user.password = await bcrypt.hash(user.password)
    next()
})

// // Virtuals
// userSchema.virtual('id').get(function(){
//     return this._id.toHexString()
// })


// // Ensure virtual fields are serialised.
// userSchema.set('toJSON', {
//     virtuals: true
// });

// // Ensure virtual fields are serialised.
// userSchema.set('toObject', {
//     virtuals: true
// });

// Instance Methods
userSchema.method('update', async function(partialUser:Partial<IUser>){
    let userKey:keyof IUser
    for ( userKey in partialUser){
        this.set(userKey, partialUser[userKey])
    }
    await this.save()
})

userSchema.method('isPasswordCorrect', async function(password:string){
    // Assumes user exists and has been confirmed
    const user = <IUserDocument>await User.findOne({username: this.username}).select('password').exec() // Workaround to be able to access password
    return await bcrypt.compare(password, <string>user?.password)
})

// Static Methods
userSchema.static('getAll', async function(){
    return await this.find({})
})

userSchema.static('add', async function(user:IUser){    
    await new this(user).save()
})

userSchema.static('getByUsername', async function(username:string){
     return await this.findOne({username})
})

userSchema.static('authenticate', async function(username:string,password:string){
   const user = await User.getByUsername(username)
   if (user && await user.isPasswordCorrect(password)){
    return user
   }
   return null
})

const User = <UserModel>models.User || model<IUserDocument, UserModel>('User', userSchema) 
export default User



