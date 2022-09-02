let axios = require("axios")

let memeData = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        res.status(200).send({ list: result.data })
    } catch (error) {res.status(500).send({ err: error.message }) }
}


let createMeme = async function (req, res) {
    try {
        let id = req.query.template_id
        let first = req.query.text0
        let second = req.query.text1
        let xyz = req.query.username
        let abc = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${first}&text1=${second}&username=${xyz}&password=${abc}`}
    
        let result = await axios(options)
        res.status(200).send({ list: result.data })
    } catch (error) { console.log(error); res.status(500).send({ err: error.message }) }
}

module.exports = { memeData, createMeme }