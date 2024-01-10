require("dotenv").config();
const connectDB =require("./db/connect");

const Product = require("./models/product");

const ProductJson =require("./products.json")

const start = async () => {
try{
await connectDB(process.env.MONGODB_URL);
await Product.deleteMany();// inorder to delete the data called 1st and after data called again renter data not merge data
await Product.create(ProductJson);
console.log("sucess h bhai...............................................");
}
catch(error)
{
console.log(error);
}
}

start();