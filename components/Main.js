import React, { useState } from 'react'
import Wheather from './Wheather.js'
import Exchange from './Exchange.js'
import TaskList from './TaskList.js'

export default function Main(props) {

  const [wheather, setWheater] = useState(true)
  const [exchange, setExchange] = useState(true)
  const [tasklist, setTasklist] = useState(true)

  const wheaterClick = ({ target }) => {
    setWheater(target.checked)
  }

  const exchangeClick = ({ target }) => {
    setExchange(target.checked)
  }

  const tasklistClick = ({ target }) => {
    setTasklist(target.checked)
  }

  return (
          <div className="flex w-full h-full">
            <nav className="flex w-2/5 bg-gray-800 text-gray-50 px-4 tex-gray-900 relative">
              <div className="mt-4 p-8">
                <div>
                  <label className="inline-flex items-center py-5">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" onClick={wheaterClick} value={wheather} defaultChecked={wheather} />
                    <span className="ml-2">Previsão do Tempo</span>
                  </label>  
                </div>
                <div>
                  <label className="inline-flex items-center py-5">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" onClick={exchangeClick} value={exchange} defaultChecked={exchange} />
                  <span className="ml-2">Câmbio</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center py-5">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" onClick={tasklistClick} value={tasklist} defaultChecked={tasklist} />
                  <span className="ml-2">Lista de Tarefas</span>
                  </label>
                </div>
              </div>
            </nav>
            <div className="w-full">
              { wheather && <Wheather /> }
              { exchange && <Exchange /> } 
              { tasklist && <TaskList /> }
            </div>
          </div>
)}