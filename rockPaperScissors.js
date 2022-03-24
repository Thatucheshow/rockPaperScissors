const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else{
      console.log('error!');
    }
  }
  
  const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === computerChoice){
      return 'Game tied!'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'You won!'
      } else {
        return 'The computer won!'
      }
    } 
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'You won!'
      } else {
        return 'The computer Won!'
      }
    }
    if(userChoice === 'bomb') {
      return 'You won!'
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    console.log(userChoice);
    let computerChoice  = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();