
const express=require("express")
const app=express()


// const Comment=require("../models/comment.models.js")
const Book=require("../model/book.model.js")

const router = express.Router();


// app.get("/posts",async(req,res)=>{
//     try{
//         // const posts=await Post.find().lean().exec()
//         const posts=await Post.find().populate({path:"userId",select:['firstName']}).lean().exec()     //id i want user thing in thish post we put user id in populate and for sepecifi

//         return res.status(201).send({post:posts})
//     }
//     catch(err){
//         return res.status(500).send({message:"somthing wrong"})
//     }
// })

// *********************
// post create
router.post("/",async(req,res)=>{
    try{
        const book=await Book.create(req.body).lean().exec()
        
        return res.status(201).send({post:book})
    }
    catch(err){
        return res.status(500).send({poserr:err})
    }
})

module.exports = router
