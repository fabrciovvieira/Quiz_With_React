//React
import { useContext } from 'react'
// Componentes
import Quiz from '../images/quiz.svg'

// Context
import { QuizContext } from '../context/quiz'

// Estilos
import './Welcome.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão abaixo para iniciar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE" })}>Iniciar</button>
        <img src={Quiz} alt="Imagem inicial" />
    </div>
  )
}

export default Welcome