import mongoose from "mongoose";


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Shahid:Mongo777@cluster0.piow0qq.mongodb.net/Food-Delivery').then(()=>console.log("DB Connected"));
}