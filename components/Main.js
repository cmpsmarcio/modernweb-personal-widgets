import React, { useState } from 'react'
import Weather from './Weather.js'
import Exchange from './Exchange.js'
import TaskList from './TaskList.js'
import RandomNumbers from './RandomNumbers.js'

export default function Main(props) {

  const [weather, setWeater] = useState(true)
  const [exchange, setExchange] = useState(true)
  const [tasklist, setTasklist] = useState(true)
  const [randomNumbers, setRandomNumbers] = useState(true)

  const weaterClick = ({ target }) => {
    setWeater(target.checked)
  }

  const exchangeClick = ({ target }) => {
    setExchange(target.checked)
  }

  const tasklistClick = ({ target }) => {
    setTasklist(target.checked)
  }

  const RandomNumbersClick = ({ target }) => {
    setRandomNumbers(target.checked)
  }

  return (
    <div className="flex w-full h-full">
      <nav className="flex w-2/5 bg-gray-800 text-gray-50 px-4 tex-gray-900 relative">
        <div className="mt-4 p-8">
          <div>
            <label className="inline-flex items-center py-5">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" onClick={weaterClick} value={weather} defaultChecked={weather} />
              <span className="ml-2">Previsão do Tempo</span>
            </label>  
          </div>
          <div>
            <label className="inline-flex items-center py-5">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" onClick={exchangeClick} value={exchange} defaultChecked={exchange} />
            <span className="ml-2">Cotações - Câmbio</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center py-5">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" onClick={tasklistClick} value={tasklist} defaultChecked={tasklist} />
            <span className="ml-2">Lista de Tarefas</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center py-5">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" onClick={RandomNumbersClick} value={randomNumbers} defaultChecked={randomNumbers} />
            <span className="ml-2">Números para Mega</span>
            </label>
          </div>
        </div>
      </nav>
      <div className="w-full">
        { weather && <Weather /> }
        { exchange && <Exchange /> } 
        { tasklist && <TaskList /> } 
        { randomNumbers && <RandomNumbers /> }
      </div>
    </div>
  )
}