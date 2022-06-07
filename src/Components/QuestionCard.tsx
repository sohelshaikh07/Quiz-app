import React from 'react';
import { AnswerObject } from '../App'
import { QuestionWrapper, ButtonWrapper } from '../App.styles'

interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions }) => {

    return (
        <QuestionWrapper>
            <p className="numbers">
                Question : {questionNumber}/{totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {
                    answers.map(answer => (
                        <ButtonWrapper
                            key={answer}
                            correct={userAnswer?.correctAnswer === answer}  
                            userClicked={userAnswer?.answer === answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    ))
                }
            </div>
        </QuestionWrapper>
    )
}

export default QuestionCard