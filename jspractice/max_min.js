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

const get_max = (a) =>{

    let ret = a[0].temp;
    for(let i=1; i<a.length; i++){
        ret = Math.max(ret,a[i].temp) 
    }
    return ret; 

}
console.log(get_max(a))


const get_min = (a) =>{

    let ret = a[0].temp;
    for(let i=1; i<a.length; i++){
        ret = Math.min(ret,a[i].temp) 
    }
    return ret; 

}
console.log(get_min(a))