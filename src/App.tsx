import React, { useState } from 'react';

//components
import QuestionCard from './Components/QuestionCard';

//types
import { QuestionState, Difficulty } from './API';
//api
import { fetchQuizQuestions } from './API';

//styles
import { GlobalStyles, Wrapper } from './App.styles';
const TOTAL_QUESTIONS = 10;

//type
export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState<boolean>(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const ans = e.currentTarget.value;
      const correct = questions[number].correct_answer === ans;

      if (correct)
        setScore(prev => prev + 1)

      //save answer in the array for user answer
      const answerObject = {
        question: questions[number].question,
        answer: ans,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }

  }

  const nextQuestion = () => {
    //move to next question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion)
    }

  }


  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>Quiz APP</h1>
        {gameOver || (userAnswers.length === TOTAL_QUESTIONS) ?
          <button className="start" onClick={startTrivia}>Start</button>
          : null
        }

        {!gameOver && <p className="score">Score : {score}</p>}
        {loading && <p>Loading Questions</p>}

        {!loading && !gameOver && (
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
          />
        )
        }
        {
          !gameOver && !loading && userAnswers.length !== number && number !== TOTAL_QUESTIONS - 1 &&
          <button className="next" onClick={nextQuestion}>Next Question </button>
        }
      </Wrapper>
    </>
  );
}

export default App;
