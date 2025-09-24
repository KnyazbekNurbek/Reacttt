import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Timer from './Timer'

function App() {
  return (
    <div className="app">
      <h1>Таймер обратного отсчета</h1>
      <p className='hint'>
        Введите время в секундах и нажмите "Старт", чтобы начать обратный отсчет.
      </p>
      <Timer />
      <footer>
        <small>
          Homework #3 - useEffect + useState
        </small>
      </footer>
    </div>
  )
}

export default App
