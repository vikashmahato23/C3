const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../model/user.model.js");

const router = express.Router();


router.get("/",async(req,res)=>{
    try{
       const users=await User.find().lean().exec()
    
       return res.status(200).send({users:users})
    }catch(err){
       
        return res.status(500).send({message:"something went worng ..try agaig later"})

    }
})


router.post(
    "/",
    // body('username').isEmail(),
    body("firstName")
      .trim()
      .not()
      .isEmpty()
      .bail()
      .withMessage("First Name cannot be empty")
      .isLength({ min: 3,max:30 })
      .withMessage("First Name must be at least 4 characters"),
    body("age")
      .not()
      .isEmpty()
      .withMessage("Age cannot be empty")
      .isNumeric()
      .withMessage("Age must be a number between 1 and 120")
      .custom((val) => {
        if (val < 1 || val >= 150) {
          throw new Error("Incorrect age provided");
        }
        return true;
      }),
   
    body("lastName").custom((value) => {
      if (value && value.length < 4) {
        throw new Error("Last Name if provided must be at least 4 characters");
      }
      return true;
    }),
    body("profileImages").custom((value)=>{
           var arr=[]
           arr.push(value)
           if(arr.length<1){
               throw new Error("atleast one")
           }
           return true
    }),
    async (req, res) => {
      try {
      
        const errors = validationResult(req);
        console.log({ errors });
        // if (!errors.isEmpty()) {
        //   return res.status(400).send({ errors: errors.array() });
        // }
  
        const user = await User.create(req.body);
  
        return res.status(201).send(user);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
    }
  );
  
  module.exports = router;