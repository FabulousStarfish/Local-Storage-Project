user1= localStorage.getItem("User1Name");
user2= localStorage.getItem("User2Name");

answer=0;

score1= 0;
score2= 0;

document.getElementById("player1").innerHTML=user1+" : ";
document.getElementById("player2").innerHTML=user2+" : ";

document.getElementById("score1user").innerHTML=score1;
document.getElementById("score2user").innerHTML=score2;

document.getElementById("question").innerHTML="Question Turn - "+user1;
document.getElementById("answer").innerHTML="Answer Turn - "+user2;


function send(){
    e = document.getElementById("operation");
    operationIndex = e.options[e.selectedIndex].value;
    operation = e.options[e.selectedIndex].text;
    console.log(operationIndex);
    console.log(operation);
    numberone=document.getElementById("numberone").value;
    numbertwo=document.getElementById("numbertwo").value;
    if(operationIndex=="1"){
        answer=parseInt(numberone)+parseInt(numbertwo);
        console.log(answer);
    }
    else if(operationIndex=="2"){
        answer=parseInt(numberone)-parseInt(numbertwo);
        console.log(answer);
    }
    else if(operationIndex=="3"){
        answer=parseInt(numberone)*parseInt(numbertwo);
        console.log(answer);
    }
    else if(operationIndex=="4"){
        answer=parseInt(numberone)/parseInt(numbertwo);
        console.log(answer);
    }
    question="<h4>"+numberone+ operation +numbertwo+"</h4>";
    input="<br>Answer: <input type='number' id='inputanswer'>"
    button="<br><br><br><button class='btn-info' onclick='check()'>Check Answer</button>"
    div=question+input+button;
    console.log(div);
    document.getElementById("place").innerHTML=div;
    document.getElementById("numberone").value="";
    document.getElementById("numbertwo").value="";
    document.getElementById("place").style.display = "block";
    document.getElementById("EnterQuestion").style.display = "none";
}
TurnQuestion="player1";
TurnAnswer="player2";
function check(){
    getAnswer=document.getElementById("inputanswer").value;
    console.log(getAnswer);
    if(getAnswer==answer){
        console.log(answer);
        console.log(getAnswer);
        if(TurnAnswer=="player1"){
            score1=score1+1;
            console.log(score1);
            document.getElementById("score1user").innerHTML=score1;
        }      
        else{
            score2=score2+1;
            console.log(score2);
            document.getElementById("score2user").innerHTML=score2;
        }  
    }
    if(TurnAnswer=="player1"){
        TurnAnswer="player2";
        document.getElementById("answer").innerHTML="Answer Turn - "+user2;
        TurnQuestion="player1";
        document.getElementById("question").innerHTML="Question Turn - "+user1;
    }
    else{
        TurnAnswer="player1";
        document.getElementById("answer").innerHTML="Answer Turn - "+user1;
        TurnQuestion="player2";
        document.getElementById("question").innerHTML="Question Turn - "+user2;
    }
    document.getElementById("place").innerHTML="";
    document.getElementById("place").style.display = "none";
    document.getElementById("EnterQuestion").style.display = "block";
}