let axios = require("axios")
let londonList = async function (req, res) {
    try {
        let london = req.query.place
        let id = req.query.id
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ list: result.data })
    } catch (error) {res.status(500).send({ err: error.message }) }
}


let londonTemp = async function (req, res) {
    try {
        let london = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london}&appid=${id}`
        }
        let result = await axios(options)
        res.status(200).send({ list: result.data.main.temp })
    } catch (error) {res.status(500).send({ err: error.message }) }
}
let allTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityArray = []
        for (i = 0; i < cities.length; i++) {
            let abc = { city: cities[i] }
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=7bbc43309924257a864568c42222d9eb`
            }
            let result = await axios(options)
            abc.temp = result.data.main.temp
            cityArray.push(abc)
        }
        let sorts=cityArray.sort((a,b)=>{a.temp-b.temp})
        res.status(200).send({listOfSortedData:sorts})

    } catch(error){
        res.status(500).send({err:error.message})
}}
module.exports = { londonList, londonTemp, allTemp }