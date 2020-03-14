// const a = ["양념과영감그리고주인", 
// "양념과념양",
// "막박효신효박수"]


// s[i] == s[j]

// ret = [false, true, false]
 
//  c\\

const a = "양념과념양aaaaaa";
let pan = a =>{
    let flag = 0; 
    const n = a.length; 
    for(let i = 0; i < n / 2; i++){ 
        if(a[i] == a[n - i - 1]){

        }else flag = 1;  
    }
    return flag == 1 ? false : true; 
}

const ret = pan(a);
console.log(ret)