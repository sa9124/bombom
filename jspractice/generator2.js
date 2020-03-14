
const log = console.log

function* gen(){
    yield 10;
    if(false) yield 20;
    yield 30;
    return 90;
    yield 30;
}

let iter = gen();
console.log(iter);
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())


function* map(f,list){
    for(let a of list){
        yield f(a);
    }
}

const add = a => a+10;
let a = [1,2,3];
log([...map(add,a)]);



const ab = [1,2,3,4,5,6,7,8]


function* number2(f, list, cnt){
    for(let a of list){
        if(f(a)){
            cnt--; 
            yield a; 
            if(cnt == 0) return;
        } 
    }
}
 
const isEven = a => {
    if(a % 2 == 0) return true; 
    return false; 
}
log([...number2(isEven, ab, 2)])

