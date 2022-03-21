const express=require("express")
const app=express()

const Comment=require("../model/comment.model.js")
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
        const comments=await Comment.find().populate({path:"postId", select:["title"],populate:{path:"userId",select:["firstName"]}
    }).populate({path:"userId",select:["firstName"]}).lean().exec()
        return res.status(201).send({comment:comments})
    }
    catch(err){
        console.log("commentget",err)
        return res.status(500).send({commentget:err})
    }
})
// *****************************
// comment post
router.post("/",async(req,res)=>{
    try{
        const comment= await Comment.create(req.body).lean().exec()
        console.log("ok")
        return res.status(201).send({comment:comment})
    }
    catch(err){
        return res.status(500).send({composterr:err})
    }
})

module.exports = router