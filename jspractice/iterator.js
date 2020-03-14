const a = ["사랑한","만큼만","미워했던","만큼만"]
console.log(Symbol.iterator in a)


for(let i = 0; i < a.length ; i++){
    console.log(a[i])
}

let _map = new Map();
_map.set ("이 어린가슴이", "숨을 쉰다");
_map.set("끝도없이", "멍하니");
_map.set("날아가는 새처럼","뒤돌아보지 않을래");

console.log(_map.get("이 어린가슴이"))

for(let a of _map)console.log(a) 


const b =["사랑한","만큼만","미워했던","마안큼만"]
const it = b[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

