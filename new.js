let rulesBtn = document.querySelector('.rules-btn')
let modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close')
let resultTitle = document.querySelector('#result-title')
let scissors = document.querySelector('#scissors')
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scoreElement = document.querySelector('.score')
let playerResult = document.querySelector('.player')
let computerResult = document.querySelector('.computer')
let playAgain = document.querySelector('.play-again-btn')
let choices = Array.from(document.querySelectorAll('.circle'))
let main = document.querySelector('main')
let resultSection = document.querySelector('.result-section')



let playerCc
let compChoice
let result

if (window.localStorage.getItem("score")) {
    scoreElement.lastElementChild.innerHTML = parseInt(window.localStorage.getItem("score"))
}

choices.forEach(choice =>{
    choice.addEventListener('click',()=>{
        main.style.display = 'none'
        resultSection.style.display = 'grid'
        playerChoice(choice)
        computerChoice()
      

    }
       
    )
})

function playerChoice(e){
  playerCc = e.cloneNode(true);


if(playerCc.id == 'scissors'){  
 playerResult.append(playerCc) 
 }
if(playerCc.id == 'paper'){ 
 playerResult.append(playerCc) 
}
if(playerCc.id == 'rock'){ 
 playerResult.append(playerCc) 
} 

}





function computerChoice(){
    let randomChoice = Math.floor(Math.random()* choices.length)
    playAgain.style.display = 'none'
    setTimeout(()=>{
        if(randomChoice === 0){
            compChoice = 'scissors'
            computerResult.append(scissors.cloneNode(true))
        }
        if(randomChoice === 1){
            computerResult.append(rock.cloneNode(true))
            compChoice = 'rock'
        }
        if(randomChoice === 2){
            computerResult.append(paper.cloneNode(true))
            compChoice = 'paper'
        }
        printResult()
        playAgain.style.display = 'block'
    }, 1000)
    
    
}




 function printResult() {

    if (window.localStorage.getItem("score")) {
        score = parseInt(window.localStorage.getItem("score"))
    } else {
        score = 0
    }

    if(compChoice === playerCc.id){
        result = "IT'S A DRAW"
    }
    
    else if((compChoice == 'rock' && playerCc.id =='paper') || (compChoice == 'scissors' && playerCc.id == 'rock') || compChoice == 'paper' &&  playerCc.id == 'scissors'){
        result = "YOU WIN"
        score +=1
    }
    
    else if(compChoice == 'rock' &&  playerCc.id == 'scissors' || compChoice == 'scissors' &&  playerCc.id == 'paper' || compChoice == 'paper' &&  playerCc.id == 'rock'){
        result = "YOU LOSE"
        if (score > 0){
            score -=1
        }
        
        
    }

    resultTitle.append(result) 
    scoreElement.lastElementChild.innerHTML = score

    window.localStorage.setItem('score', JSON.stringify(score)); 
} 






playAgain.addEventListener('click', function(){
    main.style.display = 'flex'
    resultSection.style.display = 'none'
    playerResult.lastChild.remove()
    computerResult.lastChild.remove()
    resultTitle.innerHTML = ''
})

rulesBtn.addEventListener('click', ()=>{
   
    modal.classList.add('show')
    })
    closeBtn.addEventListener('click', ()=>{
       
        modal.classList.remove('show')
    })
    modal.addEventListener('click', (e)=>{
       
        modal.classList.remove('show')
    })
    