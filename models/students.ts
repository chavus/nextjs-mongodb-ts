import { Schema, model, models } from "mongoose";

const studentSchema = new Schema({
    fullName:{type:String},
    major:{type:String},
    gpa:{type:Number}
})


const Student = model('Student', studentSchema)
export default Student