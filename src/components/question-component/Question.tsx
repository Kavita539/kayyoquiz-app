import { useEffect, useState } from "react";
import { useGame } from "../../hooks";
import "./question.css";

const Question =() => {
const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
const {
gameState: { questions, currentQuestionIndex, selectedOptions },
getNextQuestion,
getPrevQuestion,
submitQuiz,
} = useGame();

useEffect(() => {
setSelectedOptionIndex(selectedOptions[currentQuestionIndex]);
}, [currentQuestionIndex, selectedOptions]);

const { question, options } = questions[currentQuestionIndex];

return(
<div className="flex-center">
    <div className="styled-text-container">
        <div className="question">
            <h3>Question {currentQuestionIndex + 1}</h3>
            <p className="question-statement text-lg">{question}</p>
            <div className="options grid-50-50">
                {options?.map((option: string, index: number) => (
                <div onClick={()=> setSelectedOptionIndex(index)}
                    key={index}
                    className={`option shadow ${selectedOptionIndex === index ? "selected-option" : ""}`}
                    >
                    {option}
                </div>
                ))}
            </div>
            <div className="question-cta">
                <button disabled={currentQuestionIndex===0} className="btn outline-btn prev-btn" onClick={()=>
                    getPrevQuestion(currentQuestionIndex)}
                    >
                    <i className="fas fa-chevron-left"></i> Prev
                </button>

                {currentQuestionIndex === questions.length - 1 ? (
                <button className="btn outline-btn-success next-btn" onClick={()=> submitQuiz(selectedOptionIndex)}
                    >
                    Submit <i className="far fa-check"></i>
                </button>
                ) : (
                <button className="btn outline-btn next-btn" onClick={()=> getNextQuestion(currentQuestionIndex,
                    selectedOptionIndex)}
                    >
                    Next <i className="fas fa-chevron-right"></i>
                </button>
                )}
            </div>
        </div>
    </div>
</div>
);
};

export {
Question
};