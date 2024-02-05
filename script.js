let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");

const userScorePara=document.querySelector("#user");
const computerScorePara=document.querySelector("#comp");
const  genComputerChoice  = () => {
    const options=["rock","paper","scissors"];
   const randomIndex=Math.floor( Math.random()*3);
   return options[randomIndex];
};
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was draw .Play Again.";
    msg.style.backgroundColor = "rgb(43, 8, 87)";
};
const showWinner=(userWin,userChoice,computerChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win !");
    msg.innerText=`You Win!. your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
}else{
    compScore++;
    computerScorePara.innerText=compScore;
    console.log("you lose !");
    msg.innerText=`You Lost!${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
};
const playGame=(userChoice)=>{
    console.log("User choice=",userChoice);
    const computerChoice=genComputerChoice();
    console.log("computer choice=",computerChoice);

    if(userChoice===computerChoice){
      drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= computerChoice==="paper" ? false : true;
        } else if(userChoice="paper"){
            userWin=computerChoice==="scissors" ? false:true;
        }else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};
choices.forEach((choice) => {
     choice.addEventListener("click" , () =>{
        const userChoice=choice.getAttribute("id");
      playGame(userChoice);
         });

    });