// exports.sayHi=()=>{
//     return("안녕")
// }

// exports.dddd=()=>{
//     return("사랑해")
// }

module.exports = function(isLove){
    return{
        sayHi(name){
            return "안녕" + name + isLove;
        },

        sayLove(love){
            return "사랑해" + love + isLove;
        }
    }

}