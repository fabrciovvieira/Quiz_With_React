// Estilos
import './App.css'

// Componentes
import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import Category from './components/Category'

// Context
import { QuizContext } from './context/quiz'

// React
import { useContext, useEffect } from 'react'



function App() {
  const [quizState, dispatch] = useContext(QuizContext)



  return (
    <div className='app'>
      <h1>Teste seu conhecimento</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Category" && <Category/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
} 

export default App
