let random = Math.ceil(Math.random()*100);
let input = document.getElementById("input")
let result = document.getElementById("result")
let chance = document.getElementById("chance")
let answer = document.getElementById("answer")
let circle = document.getElementById("circle")
let body = document.getElementById("body")
let modebtnc = document.getElementById("modebtn")


c=5

function guessbtn(){
    if (c>1){
        c--
        if (input.value == random){
            result.textContent = "Congrats! You guess correct"
            result.style.color = "green"
            chance.textContent = "No:of Chances Left:"+c
        }else if(input.value > random){
            result.textContent = "Oops! Your guess is too high"
            result.style.color = "red"
            chance.textContent = "No:of Chances Left:"+c
        }else{
            result.textContent = "Oops! Your guess is too low"
            result.style.color = "red"
            chance.textContent = "No:of Chances Left:"+c
        }
    }else{
        result.textContent = "Oops! You loss the game out off chances "
        answer.textContent = "correct answer was :" + random
        chance.textContent = "No:of Chances Left:"+ c
    }
}


let ismode = false;
function modebtn(){
    if (!ismode){
        circle.style.marginRight= "57%"
        circle.style.marginLeft= "0%"
        circle.style.backgroundColor = "orange"
        body.style.backgroundColor = "skyblue"
        // body.style.backgroundImage = "url('https://e0.pxfuel.com/wallpapers/943/400/desktop-wallpaper-macos-monterey-alternate-in-light-and-dark-mode-thumbnail.jpg' fill)"
    }else{
        circle.style.marginLeft= "57%"
        circle.style.marginRight= "0%"
        circle.style.backgroundColor = "black"
        body.style.backgroundColor = "gray"
    }
    ismode = !ismode;     
}

