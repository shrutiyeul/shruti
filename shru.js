const http= require ("http")
  
http.createServer((req,res)=>{
     res.write("shruti")
     res.end()
}).listen(8080,()=>{
    console.log("server created successfully")
})


