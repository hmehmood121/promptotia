import mongoose from "mongoose";


let isConnected = false;

export const connectDB = async ()=> {
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log('MongoDB is connected')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share-prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log('Mongodb connected')
    } catch (error) {
        console.log(error);
    }
}