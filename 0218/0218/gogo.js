/*9 * 1 = 1
9 * 2 = 2
gogo(9)
라는 식의 문자열이 출력되는 것을 만들자. */

window.onload = () =>{ 
    makeButton();
}



let gogo = a =>{
    let ret = ""; 
    
    for( let i = 1; i<10 ; i++){
        ret += `<tr><td>${a}</td><td>x</td><td>${i}</td><td>=</td><td>${a*i}</td></tr>`;
    }
    document.getElementById("test").innerHTML = ret;
}

let makeButton = ()=>{
    let ret = ""; 
    for(let i = 1; i <= 9; i++){
        ret += `<button onclick =gogo(${i})>${i}단</button>`
    }
    const buttonWrap = document.getElementById("buttonWrap");
    buttonWrap.innerHTML = ret; 
}



