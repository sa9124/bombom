let a = [1, 2, 3, 5, 1, 2, 3, 4]
let _max = 0; 
for(let i = 0; i < a.length; i++){
    if(_max < a[i]){
        _max = a[i];
    } 
} 
console.log(_max)
