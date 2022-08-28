const ordermodel = require("../models/ordermodel")
const customermodel = require("../models/costomermodel")
const productmodel = require("../models/productmodel")
 
const ordercreate = async function (req,res){
    let data1 = req.body
    let customer= await customermodel.findById(data1.userId)
    let product = await productmodel.findById(data1.productId)
    if (!data1.userId){
         return res.send({error:"customerId is mandatory"})
 }
 else if (!customer) {
    return  res.send({msg:"Customer Id is not valid"})
 }
 else if (!data1.productId){
    return  res.send({msg:"productId  is mandatory"})
}
else if (!product) {
    return  res.send({msg:"productId is not valid"})
 }
 
  if(customer.isFreeAppUser == false){
    req.body.amount= product.price  
    if (customer.balance >= data1.amount){
       let bachat= customer.balance - data1.amount  
       let money =await  customermodel.findOneAndUpdate({_id:data1.userId} , {$set:{balance:bachat}},{new:true})
       let orderplace = await ordermodel.create(data1) 
       res.send({msg: [money,orderplace]})
    }
    else{
        res.send("User dont have enough Balance")
    }
    
}   
else if (customer.isFreeAppUser == true){
    req.body.amount = 0
    let orderplace = await ordermodel.create(data1)
    res.send({msg: [req.body.amount,orderplace]})
 }

}
module.exports={ordercreate}
