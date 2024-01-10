const Product =require("../models/product")

const getAllProducts = async (req,res)=>{

    const {company,name,featured,sort,select} =req.query;
const queryObject ={};

if(company)
{
    queryObject.company=company;
}

if(featured)
{
    queryObject.featured=featured;
}

if (name)
{
    queryObject.name={$regex:name,$options:"i"};
}

let apiData = Product.find(queryObject);

if (sort)
{
    let sortfix=sort.replace(","," ");
apiData=apiData.sort(sortfix);
}

if (select)
{
    // let selectfix=select.replace(","," ");
    let selectfix=select.split(",").join( " ");

apiData=apiData.select(selectfix);
}

let page=Number(req.query.page)||1;
let limit =Number(req.query.limit)||3;

let skip =(page-1)*limit;

apiData =apiData.skip(skip).limit(limit);

console.log(queryObject);


    const Products = await apiData;
    res.status(200).json({Products,nbHits:Products.length});
} 

const getAllProductsTesting = async (req,res)=>{
    console.log(req.query);
    const Products = await Product.find(req.query).skip(2);
    // sort

    res.status(200).json({Products});
    //res.status(200).json({msg: "Here i getAllProductsTesting"});
} 

module.exports = {getAllProducts, getAllProductsTesting};