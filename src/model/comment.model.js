const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
  name:{type:String,required:true},
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true,}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("comment", commentSchema);