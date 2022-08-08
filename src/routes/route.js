const express = require('express');
// const newi = require('../logger/logger')
// const new2 = require('../util/helper')
// const new3 = require('../validator/formatter')
const lodash=require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // newi.welcome()
    // new2.prdate()
    // new2.prmonth()
    // new2.prinform()
    // new3.trims()
    // new3.uppr()
    // new3.lowr()
    // router.get('/test-me', function (req, res) {
    //     res.send('hii,i am Deepanshu yadav')
        // no.1
        const mon=["jan","feb","mar","apr","may","june","july","aug","sep","oct","nov","dec"]
        console.log(lodash.chunk(mon, 3))
    
        // no.2
    
        const od=[1,3,5,7,9,11,13,15,17,19]
        console.log(lodash.tail(od));
    
        //no.3
    
        const arr=[1,2,3,4,5]
        console.log(lodash.union(arr,[2,6]));
    
        //no.4
    
        const obj =[ ["horror","The Shining"],["drama",'Titanic'],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
        console.log(lodash.fromPairs(obj));
    });
    
    // res.send('My last function also running')


router.get('/test-intro', function (req, res) {
    
});
router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})
router.get('/give-me-students-data',function(req, res){
})
module.exports = router;
// adding this comment for no reason