import mongoose from "mongoose";
import { Schema, model, models, Model, Document } from "mongoose";
import baseSchema from "./baseSchema";

export interface IStudent{
    id?:any, //workaround to be able to show id in the type
    fullName:string,
    major:string,
    gpa:number,
    profileImageUrl?: string;
}

export interface IStudentDocument extends IStudent, Document{
    update(partialStudent:Partial<IStudent>):Promise<void>
}

interface StudentModel extends Model<IStudentDocument>{
    add(user:IStudent):Promise<void>,
    getAll():Promise<IStudentDocument[]>,
    getById(id:string):Promise<IStudentDocument>
    getByIdLean(id:string):Promise<any>
}

const studentSchema = new Schema<IStudentDocument>({
    fullName:{type:String, required:[true, 'Full name is required']},
    major:{type:String, required:[true, 'Major is required']},
    gpa:{type:Number, required:[true, 'gpa is required']},
    profileImageUrl:{type:String}
}
)

studentSchema.add(baseSchema) // Add baseSchema 

// Instance Methods
studentSchema.method('update', async function(partialStudent:Partial<IStudent>){
    let studentKey:keyof IStudent
    for ( studentKey in partialStudent){
        if ( studentKey === 'profileImageUrl' && !partialStudent[studentKey]){
            this.set(studentKey, undefined) // unset field when there is not value
        }else{
            this.set(studentKey, partialStudent[studentKey])
        }
    }
    await this.save()
})

// Static Methods
studentSchema.static('add', async function(student:IStudent){
    await new this(student).save()
})

studentSchema.static('getAll', async function(){
    return await this.find({})
})

studentSchema.static('getById', async function(id:string){
    try{
        return await this.findById(id)
    }catch(error){
        if (error instanceof mongoose.Error.CastError){
            return null
        }
        throw error
    }
    
})

const Student = <StudentModel>models.Student || model<IStudentDocument, StudentModel>('Student', studentSchema)
export default Student