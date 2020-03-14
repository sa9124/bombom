
    /*1) 이렇게 주어진 JSON이란 파일을 생성 및 읽고 그 읽은 값을 이용해 아래의 조건을 가진 사람들을 출력하고 그 사람들의 키의 합을 추출해내라. for문 사용불가
    
    1. 170 ~ 180의 키를 가지고
    
    2. 홀수인 키를 가지고 
    
    3. 이름에 "봄"이 들어가는 사람  
    
    ​*/

//     JSON.parse
// // node .js fs 

let fs = require('fs'); 

const path = require('path');
const filePath = path.join(__dirname, '..', 'json.json')


fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        let truedata = JSON.parse(data); 
    } else {
        console.log(err);
    }
});


const height =()=>{

    
    }

}
let a = [1, 2, 3, 5, 1, 2, 3, 4]
let _max = 0; 
for(let i = 0; i < a.length; i++){
    if(_max < a[i]){
        _max = a[i];
    } 
} 
console.log(_max)

