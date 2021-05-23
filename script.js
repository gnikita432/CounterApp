let dbtn = document.querySelector('#btn1');
let ibtn = document.querySelector('#btn3');
let rbtn = document.querySelector('#btn2');
let number = document.querySelector('#num');
let count=0;
const dfn = () =>{
  number.innerHTML=--count;
  if(count<0){
  number.style.color = "red";
  }
}
const ifn=()=>{
  number.innerHTML=++count;
  if(count>0){
  number.style.color="green";
  }
}
const rfn = () =>{
    count=0;
    number.innerHTML=0;
    if(count==0){
    number.style.color="black";
    }
}
dbtn.addEventListener('click',dfn);
ibtn.addEventListener('click',ifn);
rbtn.addEventListener('click',rfn);
