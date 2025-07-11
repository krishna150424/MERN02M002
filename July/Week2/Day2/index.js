//this is for import the express
const express=require("express");

//this is for 
const app= express();

app.use(express.json());

const port=8080;
//user defined middle ware
const validation=(req,res,next)=>{
    console.log("validation ho raga hai");
    next()
}

app.use(validation)


app.get('/',(req,res)=>{
    const {q,s}=req.query;
    console.log(q)
    console.log(s)
    console.log("get method called")
    res.send("<h1>get request called</h1>");
})

app.post('/user',(req,res)=>{
    const data=req.body;
    console.log(data)
    res.status(200).json("data",data)

})

app.put('/user/:id',(req,res)=>{
    res.send("put request called");
})

app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    res.send("delete request called");
})


app.listen(port,(req,res)=>{
    console.log("my server is runlning on port",port)
})

