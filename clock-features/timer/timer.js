let[hours,minutes,seconds]=[0,0,0];
let time=document.getElementsByClassName("time");
let hrTime=time[0];
let minTime=time[1];
let secTime=time[2];
let timerRef=document.getElementsByClassName("timerDisplay")[0];
var startTimer=document.getElementById("startTimer");
var pauseTimer=document.getElementById("pauseTimer");
var resetTimer=document.getElementById("resetTimer");
let int;
let flag=0;
startTimer.addEventListener("click",()=>{
    if(flag)
    return;
    flag=1;
    if(!hours && !minutes && !seconds){
    hours=Number(hrTime.value);
    minutes=Number(minTime.value);
    seconds=Number(secTime.value);
    hrTime.value=0;
    minTime.value=0;
    secTime.value=0;
    }
    if((hours!=0 || minutes!=0 || seconds!=0))
      int=setInterval(displayTimer,1000);
      else
      alert("Enter The Time Please"); 
});

pauseTimer.addEventListener("click",()=>{
    flag=0;
    clearInterval(int);
});

resetTimer.addEventListener("click", ()=>{
hrTime.value=0;
minTime.value=0;
secTime.value=0;
flag=0;
clearInterval(int);
miliseconds=0,seconds=0,hours=0,minutes=0;
timerRef.innerHTML=(`00 : 00 : 00 `);
});

const displayTimer=()=>{
    seconds-=1;
    if(seconds==-1) 
    seconds=0;
    if(seconds==0 && minutes>0){
    seconds=59;
    minutes-=1;
    }
    else if(seconds==0 && minutes==0 && hours>0){
            seconds=59;
            minutes=59;
            hours--;
    }
    else if(seconds==0 && minutes==-0 && hours==-0){
        timerRef.innerHTML=(`00 : 00 : 00 `);
        clearInterval(int);
        alert("Time Is Up");
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    timerRef.innerHTML=(`${h} : ${m} : ${s}`);
    }
