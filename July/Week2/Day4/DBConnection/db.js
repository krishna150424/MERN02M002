const mongoose=require("mongoose");

const connectionDB=async()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase");
        console.log("Data base connected")
    }catch (error) {
        console.log("error is", error)
    }
    
}

dule.exports=connectionDB