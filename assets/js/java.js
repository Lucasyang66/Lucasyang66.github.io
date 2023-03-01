var num1=0;
var num2=0;
var num3=0;
var num4=0;
var HorL = 0;
function reloadhorl(){
    var numtitle = document.getElementById("numtitle");
    if(Math.random()>0.5){
        HorL=1;
    }else{
        HorL=0;
    };
    if(HorL==1){
        numtitle.innerText="What is the highest number";
    }else{
        numtitle.innerText="What is the lowest number";
    };
};
reloadhorl();
function randomNumber(){
    num1=Math.floor(Math.random()*18+18);
    num2=Math.floor(Math.random()*18+18);
    num3=Math.floor(Math.random()*18+18);
    num4=Math.floor(Math.random()*980+320);
};
function reloadnumber(){
    var randombtn = ["btn1","btn2","btn3","btn4"];
    var numlist = [num1,num2,num3,num4];
    for (i=4;i>0;i--) {
        var randomnum = Math.round(Math.random()*(i-1));
        listsplice = randombtn.splice(i-1,1,randombtn[randomnum]);
        randombtn[randomnum]=listsplice;
        if (String(numlist[i-1]).length>=3){
            document.getElementById(randombtn[i-1]).innerText="√"+numlist[i-1];
        }else{
            document.getElementById(randombtn[i-1]).innerText=numlist[i-1];
        };
        randombtn.pop();
    };
};
randomNumber();
reloadnumber();
function get_min(){
    return Math.min(num1,num2,num3,Math.sqrt(Math.abs(num4)));
};
function get_max(){
    return Math.max(num1,num2,num3,Math.sqrt(Math.abs(num4)));
};
function showanswer(){
    answer_text=document.getElementById("answer_text");
    if(HorL==0){
        answer_text.innerText="the lowest number is " + get_min() ;
    } else{
        answer_text.innerText="the highest number is " + get_max() ;
    };
};
function on_click_next(){
    if(done){
        showanswer();
        randomNumber();
        reloadnumber();
        reloadhorl();
        get_min();
        get_max();
        done=false;	  
    }
};
function on_click_answer(elem){
    answer_text=document.getElementById("answer_text");
    console.log(typeof elem.innerText);
    var answer = elem.innerText;
    if(answer.length > 2){
            answer=Math.sqrt(Math.abs(num4));
    };
    if(answer == get_min() && HorL==0||answer == get_max() && HorL==1){
        answer_text.innerText="Your Right!"
	    done = true;
    } else{
        answer_text.innerText="Your wrong!"
    };
    console.log(answer);
};