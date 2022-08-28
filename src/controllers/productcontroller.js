const productmodel = require("../models/productmodel")


const productcreate = async function (req,res){
    const data1= req.body
    const saved = await productmodel.create(data1)
    res.send({msg:saved})
}
module.exports={productcreate}
