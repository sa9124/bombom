const a = [
    {
        "temp": 29,
        "humid": 40
    },
    {
        "temp": 49,
        "humid": 20
    },
    {
        "temp": 19,
        "humid": 50
    },
    {
        "temp": 9,
        "humid": 20
    },
    {
        "temp": 240,
        "humid": 423
    }
] 

const reducer = ( acc, cur) =>{
    return Math.max(acc,cur);
}

const get_max=(a)=>{
    let _temp = a.map(e => e.temp)
    return _temp.reduce(reducer)
}
 
console.log(get_max(a))
//함수를 집어넣는 것. 
const b = () => {
    return 1; 
}
const c = f => {
    console.log(f())
}
c(b)