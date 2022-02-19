
const btn = document.querySelector("#check");
const sonuc = document.querySelector("#sonuc");
const com = Math.floor(Math.random()*100+1);

const num = document.getElementById("number");
console.log(com);
let count=0
btn.addEventListener("click", ()=> {
let n = num.value
console.log(n);

count+=0;

    if(n == com){
        count++
        sonuc.innerHTML = n + " Is Correct Number and"+ ` You find ${count}. attempt`
        
        }

    else if((0<=n) && (n < com)){
        sonuc.innerHTML = n  + " (Up Please)"  
        count++ 
        }
        
    else if((100>=n) && (n > com)){

        sonuc.innerHTML= n + " (Down Please)"
        count++
        }

    else if(n>100 || n<0){
        sonuc.innerHTML = n + " Is Not Invalid Number"
        count++
        }
       
});