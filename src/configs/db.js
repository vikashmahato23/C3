const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://vikash1997:Jyotibharti12@cluster0.mhoai.mongodb.net/c2?retryWrites=true&w=majority"
  );
};