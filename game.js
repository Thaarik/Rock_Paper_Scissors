let playerScore = 0;
let cpuScore = 0;
//event listeners
const final = document.querySelector("#final");
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const result = document.querySelector(".resultbox");
const user = document.querySelector("#user");
const cpu = document.querySelector("#cpu");

let info;
let count = 0;

rock.addEventListener('click', () => {
    info = playRound("Rock", computerPlay());
    result.innerHTML = '<p>' + info + '</p>';
    user.innerHTML = playerScore;
    cpu.innerHTML = cpuScore;

});
paper.addEventListener('click', () => {
    info = playRound("Paper", computerPlay());
    result.innerHTML = '<p>' + info + '</p>';
    user.innerHTML = playerScore;
    cpu.innerHTML = cpuScore;
});
scissor.addEventListener('click', () => {
    info = playRound("Scissor", computerPlay());
    result.innerHTML = '<p>' + info + '</p>';
    user.innerHTML = playerScore;
    cpu.innerHTML = cpuScore;
});

//computer choosing item
function computerPlay() {
    let cpu;
    let cpuItem = Math.floor((Math.random() * 3) + 1);
    if (cpuItem === 1) {
        cpu = "Rock";
    } else if (cpuItem === 2) {
        cpu = "Paper";
    } else if (cpuItem === 3) {
        cpu = "Scissor"
    }
    return cpu;
}

//disable button at the end of the game
function disableButton() {
    document.querySelectorAll("#button").forEach(e => {
        e.disabled = true
    })
}

//play again button function
function playagain() {
    window.location.reload();
}

//Game function
function playRound(playerSelection, computerSelection) {
    let result;
    if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissor") || (playerSelection === "Scissor" && computerSelection === "Rock")) {
        result = `You LOSE! ${computerSelection} beats ${playerSelection}`

        cpuScore++;
        if (cpuScore === 5) {
            final.textContent = 'YOU LOSE!'
            final.style.cssText = "color:#950740;font-weight:bolder;font-size:50px;display:flex;justify-content: center;align-items: center;"
            disableButton();
        }
    } else if ((playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissor" && computerSelection === "Paper") || (playerSelection === "Rock" && computerSelection === "Scissor")) {
        result = `You WIN! ${playerSelection} beats ${computerSelection}`
        playerScore++;
        if (playerScore === 5) {
            final.textContent = 'YOU WIN!'
            final.style.cssText = "color:#950740;font-weight:bolder;font-size:50px;display:flex;justify-content: center;align-items: center;"
            disableButton();
        }
    } else {
        result = `Match is a Tie!`
    }

    return result;
}