let getHumi = (min, max) =>{
    return parseInt(min + Math.random() * (max-min)) + '%';
}

let getTemp = (min, max) => {
    return parseInt(min + Math.random() * (max-min));
}

let getArray = () => {
    let array = [];
    for(let i=0; i<10 ; i++){
        let humi = getHumi(70,90);
        let temp = getTemp(25,30);
        const obj = {
            temp : temp,
            humid : humi
        }
        array.push(obj)
    }
    return array;  
}

let arr = getArray();

console.log(arr)
const getMaxTemp = a =>{
    let _max = -1; 
    a.forEach(element => {
        _max = Math.max(_max, element.temp ) 
    });
    return _max; 
} 

console.log(arr)
const getMaxHumid = a =>{
    let _maxHumid = -1;
    a.forEach(element => {
        let humid2 = element.humid.slice(0,2)
      _maxHumid = Math.max(_maxHumid,parseInt(humid2))   
    });
    return _maxHumid + '%'

}

const ret = getMaxTemp(arr)
const retHumid = getMaxHumid(arr)
console.log(ret)
console.log(retHumid)

