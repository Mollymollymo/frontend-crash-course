"use strict";

const count=()=>{
  const now=document.querySelector(".input").value;
  const startButton=document.querySelector(".start");
  startButton.addEventListener("click",start);
  const num;

  const start =(now)=>{
    const counter=setInterval(()=>{
      if(now!==0){
        now=now-1;
        num.textContent=now;
      }if(num==0){
        clearInterval(num);
      }
    },1000)
  }
}