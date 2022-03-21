const express = require("express");

const usersController = require("./controllers/user.con.js");
const booksController = require("./controllers/book.con.js");
const pubController = require("./controllers/pub.con.js");
const commentController = require("./controllers/comment.con.js");

const app = express();

app.use(express.json());

app.use("/users", usersController); 
app.use("/books", booksController); 
app.use("/pubs", pubController); 
app.use("/comments", commentController); 


module.exports = app;
