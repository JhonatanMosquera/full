import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type: String,
        require:true,
        trim:true,//limpia espacio "   dddd"
        unique:true // unico dato
    },
    password: {
        type: String,
        require:true,
        
    }

},{timestamps:true})

export default mongoose.model('User', userSchema)