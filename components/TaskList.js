import React, { useState, useRef } from 'react'

export default function TaskList() {
  const inputTask = useRef(null)
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const handleTextChanged = ({target}) => {
    setText(target.value)
  }

  const deleteRow = ({ target }) => {
    tasks.splice(tasks.findIndex(task => task.id == target.id), 1)
    setTasks([...tasks])
  }

  const handleClick = () => {
    if (text === '') {
      return 
    }
    const task = {
      id: (tasks[tasks.length - 1] || {}).id + 1 || 0,
      description: text
    }
    setTasks([...tasks, task])
    clearInputTask()
  }

  const clearInputTask = () => {
    setText('')
    inputTask.current.value = ''
    inputTask.current.focus()
  }

  return (
    <div className="py-2" >
      <article className="border-l-4 border-gray-400 bg-gray-100 sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://cdn4.iconfinder.com/data/icons/stop-virus-outline-iconset/128/ic_clipboard-128.png" alt="List" className="w-full rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-xl font-bold pb-4">Lista de Tarefas</h2>
          <div className="flex pb-2">
            <input type="text" ref={inputTask} id="inputTask" className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Insira uma tarefa..." onChange={handleTextChanged}/>
            <button id="addTask" className="flex items-center justify-center h-10 w-10 mr-2  bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white focus:outline-none" onClick={handleClick} >+</button>
          </div>
          <table className="table-auto w-full text-sm" >
            <thead className="italic text-xs">
              <tr>
                <th className="w-10/12 text-left">Tarefa</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
            {tasks.map(task => {
              return  <tr key={task.id} >
                        <td >{task.description}</td>
                        <td><button id={task.id}  className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-1 m-1 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline" onClick={deleteRow} >del</button></td>
                      </tr>
              })
            }
            </tbody>
          </table>
        </div>
        <div className="justify-self-end">
          <img src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-11-128.png" alt="Bookmark" className="w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}