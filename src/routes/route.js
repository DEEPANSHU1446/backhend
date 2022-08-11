const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})
router.post("/players", function(req,res) {
    let players =
    [
        {
            "name": "Sachin",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "Mumbai",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "Yuvraj",
            "dob": "1/09/1995",
           "gender": "male",
           "city": "ludhiana",
           "sports": [
               "cricket"
           ]
       },
       {
           "name": "Bajrang",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "sonipat",
           "sports": [
               "wrestling"
           ]
       },
   ];
   let newplayer = req.body
   for(i=0; i<players.length; i++) {
    if (players[i].name!==newplayer.name){
    players.push(newplayer)
    res.send(  { data: players  }  )
   }
   else{
    res.send("Newplayer already exist")
}
}    
})
let person =[
    {
        name:"Deepanshu",
        age:22,
        votingStatus :false

    },
    {
        name:"sameer",
        age:12,
        votingStatus :false

    },
    {
        name:"Gaurav",
        age:24,
        votingStatus :false

    },
    {
        name:"Kirti",
        age:14,
        votingStatus :false

    },
    {
        name:"Ritu",
        age:52,
        votingStatus :false

    },
    {
        name:"Rajesh",
        age:18,
        votingStatus :false

    },
]
router.post('/person', function (req, res) {
       let votingAge =req.body
       let eligibleVoters=[]
       for (i=0;i<person.length;i++){
        if (person[i].age>votingAge.age){
            person[i].votingStatus= true
            eligibleVoters.push(person[i])     
        }
       }
       res.send({eligibleVoters})
    })
module.exports = router;