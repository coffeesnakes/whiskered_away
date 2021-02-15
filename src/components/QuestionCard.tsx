import React from 'react';
// typechecking the properties of the Card
type Card = {
  question: string;
  answers: string[];
  callback: any;
  users: string;
  questionNumber: number;
  totalQuestions: number;
}
// defining as a functional component
const QuestionCard: React.FC<Card> = ({
  question, answers, callback, userAnswer, questionNumber, totalQuestions
}) => (
<div>

  <p className='number'>
    Question: {questionNumber} / {totalQuestions}
    </p>
    <o dangerouslySetInnerHTML={{ __html: question}} />
    <div>
    </div>

   </div>
)

export default QuestionCard