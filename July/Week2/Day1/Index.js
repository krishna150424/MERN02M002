const http=require("http");

const myServer=http.createServer((req,res)=>{
    console.log("server is running on port 8000");
    console.log(req.url)
    res.end("response end")
})

myServer.listen(8000);