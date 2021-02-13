import React from "react";
import QuestionCard from './components/QuestionCard';

const App = () => {
const startGame = async () => {

}

const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

}

const nextQuestion = () => {

}
  return (
    <div className='App'>
      <h1> Quiz </h1>
      <button className='start' onClick={startGame}> Start </button>
      <p className='score'> Score : </p>
      <p>Loading.... </p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}> Next Question </button>
    </div>
  )
}

export default App;
