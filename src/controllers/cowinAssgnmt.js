let axios = require("axios")

let getList = async function (req, res) {
    try {
        let districtId = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ list: result.data })
    } catch (error) { console.log(error); res.status(500).send({ err: error.message }) }
}
module.exports = {getList}