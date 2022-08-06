
function date(){
    let times = new Date();
    console.log("Today the date is",times.getDate());
}
function month(){
    let times = new Date();
    console.log("The month is",times.getMonth()+1);
}
function inform(){
    console.log("Plutonium, W3D3,the topic for today is Nodejs module system" );
}
module.exports.prdate=date
module.exports.prmonth=month
module.exports.prinform= inform