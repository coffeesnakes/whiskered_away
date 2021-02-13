import React from 'react';
// typechecking the properties of the Card
type Card = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNumber: number;
  totalQuestions: number;
}
// defining as a functional component
const QuestionCard: React.FC<Card> = ({
  question, answer, callback, userAnswer, questionNumber, totalQuestions
}) => (
<div>

  <p className='number'>
    Question: {questionNumber} / {totalQuestions}
    </p>
   </div>
)

export default QuestionCard