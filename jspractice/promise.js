const promise_1 = () => {
    return new Promise((resolve, reject) => {
        const _b = Math.random * 100;
        setTimeout(() => {
            resolve("이")
        }, _b);
    })
}



const promise_2 = () => {
    return new Promise((resolve, reject) => {
        const _b = Math.random * 100; 
        reject("새가 안됨")
        setTimeout(() => {
            resolve("새")
        }, _b);
    })

}


const promise_3 = () => {
    return new Promise((resolve, reject) => {
        const _b = Math.random * 100;
        setTimeout(() => {
            resolve("봄")
        }, _b);
    })

}

const main = async()=>{
    let ret;
    ret = await promise_1();
    console.log(ret);
    ret = await promise_2().catch(e => console.log(e))
    console.log(ret);
    ret = await promise_3();
    console.log(ret);
}

main();

// promise_1()
// .then(a => {
//     console.log(a)
//     return promise_2()
// })

// .then(a => {
    
//     console.log(a)
//     return promise_3()

// })

// .then(a=> {
//     console.log(a)
// })