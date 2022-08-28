const mid1 = function (req,res,next){
    let validate =req.headers.isfreeappuser
    if(validate == "false"){
        req.body.isFreeAppUser = false
    }
    else{
        req.body.isFreeAppUser = true
     }
     if(!validate){
        res.send({error:"Mandatory header is required"})
     }
     else{
        next()
     }
     }
     
        



    
module.exports={mid1}