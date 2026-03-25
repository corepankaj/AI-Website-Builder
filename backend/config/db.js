import mongoose  from "mongoose";
const makeConnection = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB Connected");
    } catch (error) {
        console.log("Getting Error to Mongo DB");
    }
}
export default makeConnection;