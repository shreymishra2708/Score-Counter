// set initial count 
let count1=0;
let count2=0;
let  res=0;

// select value and buttons
const flower=document.querySelector('#flower');
flower.style.color='orange';                        // color changed 
const value1 = document.querySelector('#value1'); // # because id =value1 so # to acess id and . to acess class o
const  value2= document.querySelector('#value2'); // only one class would be accessed , here if many of same name then first of them 
const winner= document.querySelector('#winner');

const btns = document.querySelectorAll(".btn"); // . use kr rhe kyunki sari buttons select kr rhe jisme clas name btn hao

// console.log(btns);
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){ // checking using function which button clicked
       const styles= e.currentTarget.classList; // stores what are the classes that button had when clicked
      if(styles.contains("decrease")){ // here we check ki kya ye class hai ki nhi 
         count1++;
    }
   
     else if(styles.contains("reset")){
        count1=0;
        count2=0;
     }
 
    else if(styles.contains("increase")){
        count2++;
    }
    else if(styles.contains("result")){
        res=1;         // so we know reult button clicked
    }
    value1.textContent= count1; // here we updated the value of value 
    value2.textContent=count2;
     // color changing
     if(count1>count2){
        value1.style.color='green';
        value2.style.color='red';
        winner.textContent="Player 1 is leading ";
     }
     if(count1<count2){
        value2.style.color='green';
        value1.style.color='red';
        winner.textContent="Player 2 is leading ";
     }
     if(count1==count2){
        value1.style.color='blue';
        value2.style.color='blue';
        winner.textContent=" Its tie!!!!!!! ";
     }
     if(res){
      if(count1<count2){
         winner.textContent="Player 2 Won !!!!!!!! ";
       }
       else if(count2<count1){
         winner.textContent="Player 1 Won !!!!!!!!!";
       }
       else{
         winner.textContent="Game Is Draw !!!!!!!!!";
       }
       value1.textContent= 0; // here we updated the value of value 
       value2.textContent=0;
       res=0; // reset to 0 so that again we know when result button clicked
     }
});
});
