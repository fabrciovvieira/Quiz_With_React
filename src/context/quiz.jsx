import { createContext, useReducer } from "react";
import questions from '../data/questions_complete';

const STAGES = ["Start", "Category", "Playing", "End"];

const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionTohide: null,
};

const quizReducer = (state, action) => {

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1] 
            };

        case "START_GAME":
            let quizQuestions = null

            state.questions.forEach((question) => {
                if(question.category === action.payload) {
                    quizQuestions = question.questions
                }
            });

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2]
            }

        case "REODER_QUESTIONS":
            const reoderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reoderedQuestions,
            };
        case "CHANGE_QUESTION":
            const nextQuestion =state.currentQuestion + 1;
            let endGame= false;

            if(!state.questions[nextQuestion]) {
                endGame = true
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false
            };
        case "NEW_GAME":
            return initialStage;

        case "CHECK_ANSWER":
            console.log(action)
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;

            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

        case "SHOW_HINT":
            return {
                ...state,
                help: "tip"
            }
        case "REMOVE_OPTION": {
            const questionWithoutOption = state.questions[state.currentQuestion];
        
            console.log(state.currentQuestion);
        
            console.log(questionWithoutOption);
        
            let repeat = true;
            let optionToHide;
        
            questionWithoutOption.options.forEach((option) => {
                if (option !== questionWithoutOption.answer && repeat) {
                optionToHide = option;
                repeat = false;
                }
            });
        
            return {
                ...state,
                optionToHide,
                help: true,
            };
        }
            
        default:
            return state;
        }


};

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialStage); 
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};