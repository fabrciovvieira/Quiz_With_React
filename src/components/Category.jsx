import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import category from '../images/category.svg'
import './Category.css'


const Category = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    const chooseCategoryAndReoderQuestions = (category) => {
        dispatch({type: "START_GAME", payload: category})

        dispatch({type: "REODER_QUESTIONS"})

    }


  return (
    <div id="category">
        <h2>Escolha uma Categoria</h2>
        <p>As perguntas serão de acordo com a categoria selecionada</p>
        <div>
            {quizState.questions.map((question) => (
                <button onClick={() => chooseCategoryAndReoderQuestions(question.category)} key={question.category}>{question.category}</button>
            ))}
            </div>
        <img src={ category } alt="img da categoria" />
    </div>
  )
}

export default Category