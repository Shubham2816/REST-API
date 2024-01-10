require("dotenv").config();
const express = require("express");
//  Importing the Express Module:
const app =express();
 const connectDB =require("./db/connect");

const PORT = process.env.PORT||5000;
// we will import PORT afterwards else run on localhost

const products_routes = require("./routes/products");

app.get("/",(req,res) =>{
res.send("Hi i am shubham :0");
});
// Defines a route that responds to GET requests at the root path

// middleware
app.use("/api/products", products_routes)

const start =async () => {
    try {
         await connectDB(process.env.MONGODB_URL);
app.listen(PORT,() => {
    console.log(`${PORT} Yes connected boss`);
});
    } catch (error){
console.log(error);
    }
}

start()