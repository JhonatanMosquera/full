import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        console.log("conectado exitosamente")
        await mongoose.connect("mongodb://localhost/merndb")
    } catch (error) {
        console.log(error)
    }


}