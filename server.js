const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb://127.0.0.1:27017/news")

const Post = mongoose.model("Post",{

title:String,
image:String,
content:String

})

app.get("/posts", async(req,res)=>{

const posts = await Post.find()

res.json(posts)

})

app.post("/posts", async(req,res)=>{

const post = new Post(req.body)

await post.save()

res.json(post)

})

app.listen(3000, ()=>{

console.log("Server running")

})