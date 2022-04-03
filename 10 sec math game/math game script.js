let startBtn=document.querySelector(".start");
let resetBtn=document.querySelector(".reset");
let secondLeft=document.querySelector(".sec");
let timeLeft=10;
let mathOperation=document.querySelector(".math");
let numLimit=document.querySelector(".range");
let displyLimit=document.querySelector(".limit");
let firstNum;
let secNum;
let getInput=document.querySelector(".ans");
let submitAns=document.querySelector(".submit");
let correctAddAns;
let correctSubAns;
let correctMulAns;
let correctDivAns;
let getNumLimit=10;
let getOpertion="random";
let selectOp=document.querySelector(".select-math");
let answer=document.querySelector(".answer");


numLimit.oninput = function() {
    getNumLimit=this.value;
    displyLimit.innerHTML=getNumLimit;
   //console.log(getNumLimit);
 }
 selectOp.addEventListener("click",function(e){
    getOpertion=e.target.className;
  // console.log(getOpertion);
})


      var  newQuestion=function(){
           if (getOpertion=="add") {
               
                firstNum=Math.floor(Math.random()*10+1);
                secNum=Math.floor(Math.random()*10+1);
                mathOperation.innerHTML=firstNum+"+"+secNum;
               //console.log(firstNum);
               // console.log(secNum);
             
           }
           if (getOpertion=="random") {
               firstNum=Math.floor(Math.random()*10+1);
               secNum=Math.floor(Math.random()*10+1);
               mathOperation.innerHTML=firstNum+"+"+secNum;
           }
           if (getOpertion=="sub") {

            firstNum=Math.floor(Math.random()*10+1);
            secNum=Math.floor(Math.random()*10+1);

            if (firstNum>secNum) {
            mathOperation.innerHTML=firstNum+"-"+secNum;
           // console.log(firstNum);
              // console.log(secNum);
            }
            else{
                firstNum=2;
                secNum=1;
                mathOperation.innerHTML=firstNum+"-"+secNum;
            }

        }
        if (getOpertion=="mul") {
            firstNum=Math.floor(Math.random()*10+1);
            secNum=Math.floor(Math.random()*10+1);
            mathOperation.innerHTML=firstNum+"*"+secNum;
           // console.log(firstNum);
             //  console.log(secNum);
        }
        if (getOpertion=="div") {
            firstNum=Math.floor(Math.random()*10+1);
            secNum=Math.floor(Math.random()*10+1);
            mathOperation.innerHTML=firstNum+"/"+secNum;
           // console.log(firstNum);
             //  console.log(secNum);
        }

        }
        
      var  startTimer=function(){
            startBtn.disabled=true;
            let secLeft=setInterval(function(){
            timeLeft-=1;
            //console.log(timeLeft);
            secondLeft.innerHTML=timeLeft;
            if (timeLeft==0) {
                clearInterval(secLeft);    
                resetBtn.disabled=false;
                getInput.style.backgroundColor="rgba(0, 0, 0,0.1)"
                getInput.disabled=true;
                mathOperation.innerHTML="Time Out!"
                secondLeft.innerHTML="0"
                //console.log("time up!")           
            }
            },1000);
            }
      var  isCorrectAns=function(val){
        correctAddAns=firstNum+secNum;
        correctSubAns=firstNum-secNum;
            correctMulAns=firstNum*secNum;
            correctDivAns=firstNum/secNum;
            if (val==correctAddAns||val==correctSubAns||val==correctMulAns||val==correctDivAns) {
                getInput.value="";
                timeLeft+=2;
                newQuestion();
                answer.innerHTML="correct Ans!";
                answer.style.color="rgb(83, 202, 83)";
                //console.log(correctAddAns);
               // console.log(val);
                
            } 
         else{     
                answer.innerHTML="wrong Ans!"; 
                answer.style.color="red"; 
                newQuestion(); 
                getInput.value="";
               // console.log(firstNum);
               // console.log(secNum);
            }
        }

   
        startBtn.addEventListener("click",startGame);
        resetBtn.addEventListener("click",resetGame); 

   
     function startGame(){
    resetBtn.disabled=true;
    getInput.disabled=false;
    getInput.value="";
    newQuestion();
    startTimer();
    getInput.focus();
     getInput.addEventListener("keypress",pressEnter);

    }
function resetGame(){
    window.location.reload();
    }
    
    
    function pressEnter(e){
        if (e.keyCode==13) {
            let val=getInput.value;
      isCorrectAns(val);
     // console.log(firstNum);
     // console.log(secNum); 
     // console.log(val); 
        }
    }