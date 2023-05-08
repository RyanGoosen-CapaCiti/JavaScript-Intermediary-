//STORES AND GETS VALUES FROM HTML DOC.
const computerChoiceDisplay = document.getElementById("computer");

const userChoiceDisplay = document.getElementById("user");

const resultDisplay = document.getElementById("result1");

let userChoice,computerChoice,result ;

//picks all the buttons
const possibleChoices=document.querySelectorAll("button");

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=> {
 userChoice = e.target.id;
userChoiceDisplay.innerHTML=userChoice;

generateCompChoice();
getResult();
}))

// generate computers response
function generateCompChoice(){
const randomNum =Math.floor(Math.random()*3)+1; // possibleChoices.length
console.log(randomNum);

if (randomNum===1){
    computerChoice="rock";

} else if (randomNum===2){
    computerChoice="scissors";

} else {
    computerChoice="paper"; 
}
computerChoiceDisplay.innerHTML=computerChoice;
}

//Winner/LOSWE RESULTS

function getResult(){

if (computerChoice===userChoice)
{
    result='Tie/Draw';
}
if (computerChoice==='rock' && userChoice==='paper')
{

result='You Win';

}

if (computerChoice==='rock' && userChoice==='scissors')
{

result='You Lose';

}

if (computerChoice==='paper' && userChoice==='scissors')
{

result='You Win';

}


if (computerChoice==='paper' && userChoice==='rock')
{

result='You Lose';

}

if (computerChoice==='scissors' && userChoice==='rock')
{

result='You Win';

}

if (computerChoice==='scissors' && userChoice==='paper')
{

result='You Lose';

}


resultDisplay.innerHTML=result;


}

















