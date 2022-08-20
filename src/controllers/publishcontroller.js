const publishModel = require("../models/publishModel")


const createpublisher= async function (req, res) {
    let publish = req.body
    let publishCreated = await publishModel.create(publish)
    res.send({data: publishCreated})
}
module.exports.createpublisher=createpublisher
