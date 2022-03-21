const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default:"0" },
    coverImage: { type: String, required:true },
    content:{type:String,required:true},
    pubId:{type:mongoose.Schema.Types.ObjectId,ref:"pub",reuired:true,}
     
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);