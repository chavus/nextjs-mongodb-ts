import { Schema } from "mongoose";

export default new Schema(
    {
        __v: { type: Number, select: false}, // select:false to hide field/path from query results
    },
    {
        'toObject':{ // Adjust to show id instead of _id 
            transform:function(doc,ret){
                ret.id = ret._id.toString();
                delete ret._id
            }
        }
    }
)
