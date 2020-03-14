let a = [1,2,3,4,5]
let _min = Math.max(...a);
for(let i=0; i<a.length ; i++){
    if( _min > a[i]){
        _min = a[i]
    }
}
console.log(_min)