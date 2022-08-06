function trims(){
    let cut = "             hello functionup              "
    console. log(cut.trim());
}
function uppr(){
    let stat=" hii functionup"
    console.log(stat.toUpperCase());
}
function lowr(){
    let st ="HI FUNCTIONUP"
    console.log(st.toLowerCase());
}
module.exports.trims=trims
module.exports.uppr =uppr
module.exports.lowr =lowr