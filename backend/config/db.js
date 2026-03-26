import mongoose from "mongoose";
const makeConnection = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo db connected");

    } catch (error) {

        console.log("Getting error to connect Mongo db");
    }
}
export default makeConnection;