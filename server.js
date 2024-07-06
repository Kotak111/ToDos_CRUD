const express =require("express")
const bodyParser = require("body-parser");
// const { todo } = require("node:test");
const app=express();
const PORT=4500;
app.use(bodyParser.urlencoded({extended:"true"}));
let todos=[];
app.get("/todos",(req,res)=>{
    res.json({message:todos})
})
app.post("/todos",(req,res)=>{
    const {data}=req.body;
    if(!data){
        res.json({message:"data is required "})
    }
    todos.push(data)
    res.json({message:"data is inserted"})
})
app.delete("/todos/:id",(req,res)=>{
    const id=req.params.id;
    if(!todos[id]){
        res.json({message:"no id found"})
    }
    todos.splice(id,1);
    res.json({message:"data deleted"})
})
app.put("/todos/:id",(req,res)=>{
    const data=req.body.data;
    const id =req.params.id;
    if(!todos[id]){
        res.json("no data found")
    }
    todos[id]=data;
    res.json({message:"data updated"})
})
app.listen(PORT,()=>{console.log(`listen port number ${PORT}`);})
