const randomNumber = Math.floor(Math.random()*99+1);
const userguess = document.querySelector("input");
const resultdiv = document.querySelector(".result");
const historydiv = document.querySelector(".history");
const rulesdiv = document.querySelector(".rules");


function Condition() {

 let rules;
    
this.rule1 = "Guess any number between 1 and 100.";
this.rule2 = "You will be taken only five chances to win this game.";
this.rule3 = "All the best for your victory!!"

return rulesdiv.innerHTML = `${this.rule1} </br> ${this.rule2} </br>${this.rule3}`;
}

let chances = 5;
let win = false;

function game(){
let result;
let guess = userguess.value;
if (guess > 100 || guess < 1){

result = "Lets start to choose a number";
resultdiv.innerHTML = `<h4>${result}</h4>`;

}
else if (chances && !win){

    let guess = userguess.value;
    if (guess == randomNumber){

        result = "YOU WON!!";
        win = true;
        }
        else if (guess < randomNumber){

            if (chances==1){
        result = `YOU LOSE YOUR GAME! </br> The Exact Value is ${randomNumber}`
            }else {
            result = "Your estimated value is too low";
        }
            }
        else {
        
            if  (chances==1){
              result =  `YOU LOST YOUR GAME! </br> The Exact Value is ${randomNumber}`
            }
            else {
                result = "Your estimated value is too high!"
            }
}
chances--;

historydiv.innerHTML += `<h4> You Guessed ${guess} </h4>`;

return resultdiv.innerHTML = `<h4>${result}</h4>`;

}
}


function reload() {
    if (!chances || win){
    location.reload();}
}