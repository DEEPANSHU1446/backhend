const customermodel = require("../models/costomermodel")


const customercreate = async function (req,res){
    const data1= req.body
    const saved = await customermodel.create(data1)
    res.send({msg:saved})
}
module.exports={customercreate}