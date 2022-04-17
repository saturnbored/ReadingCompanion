let[miliseconds,seconds,minutes,hours]=[0,0,0,0];

let timerRef=document.getElementsByClassName("timerDisplay")[0];
var strtBtn=document.getElementById("startTimer");
var pauseBtn=document.getElementById("pauseTimer");
var resetBtn=document.getElementById("resetTimer");

let int;
let flag=0;

strtBtn.addEventListener("click",()=>{
  if(!flag)
  { int=setInterval(displayTimer,10); flag=1; }
});

pauseBtn.addEventListener("click",()=>{
    flag=0;
    clearInterval(int);
});

resetBtn.addEventListener("click", ()=>{
flag=0;
clearInterval(int);
miliseconds=0,seconds=0,hours=0,minutes=0;
timerRef.innerHTML=(`00 : 00 : 00 : 000`);
});

const displayTimer=()=>{
    miliseconds+=10;
    if(miliseconds==1000){
        miliseconds=0;
        seconds+=1;
        if(seconds==60){
            seconds=0;
            minutes+=1;
            if(minutes==60){
                minutes=0;
                hours+=1; 
            }
        }
   }    
let h=hours<10?"0"+hours:hours;
let m=minutes<10?"0"+minutes:minutes;
let s=seconds<10?"0"+seconds:seconds;
let ms=miliseconds<10?"00"+miliseconds:miliseconds<100?"0"+miliseconds:miliseconds;
timerRef.innerHTML=(`${h} : ${m} : ${s} : ${ms}`);
}

