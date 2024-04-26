import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    difficulty:{
        type:String,
        enum:["Easy","Difficult","Medium"]
    
    },
    author:{
        type:String,
        trim:true
    },
    codeSamples: {
        type: [{
            language: String,
            code: String
        }],
        required: true
    },
    // Other fields specific to the question (e.g., difficulty level, tags)
}, {
    timestamps: true
});

export const Question = mongoose.model('Question', questionSchema);
