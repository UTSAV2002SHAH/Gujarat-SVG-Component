import mongoose from "mongoose";

export async function connect(){
    try {
        console.log();
        
        await mongoose.connect("mongodb://127.0.0.1:27017/nextproject") // process.env.MONGO_URL
        const connection = mongoose.connection;

        connection.on('connected', ()=>{
            console.log('Connected to MongoDB');
        })

        connection.on('error', (err)=>{
            console.log('error while connecting to MongoDB' + err);
        })

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB connection disconnected');
        });

    } catch (error) {
        
    }
}