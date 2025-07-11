const mongoose=require("mongoose");

const connectDB= async ()=>{
    try{
       const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDatabase");
       console.log("mongoDB connected");
       //connection.disconnect(); to disconnect the database

      // userModel.insertOne({name:"xyz",age:19,email:"nmg@gmail.com",password:"12346"});
      //const user=new userModel({
       // _id:ObjectId('686e174b1bcced7c10aaec4b'),

    //     name:"Vicky",
    //     age:29,
    //     email:"vicky@gmail.com",
    //     password:"78546"
    //   })
    //   await user.save()

     //console.log("data saved")

await userModel.findByIdAndUpdate({)}
    } catch (error){
        console.log("Error",error)
        

    }
       


}
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        age:{
            type:Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel
module.exports=connectDB;