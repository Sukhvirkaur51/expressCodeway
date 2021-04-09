var express=require('express');
var route=require("./routes/userRoutes");

var app =express();

app.use('/', route);

app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server is running");
    }
})