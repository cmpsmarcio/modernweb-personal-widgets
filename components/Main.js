import Wheather from './Wheather.js'
import Exchange from './Exchange.js'
import TaskList from './TaskList.js'

export default function Main(props) {

  return (
          <div className="flex w-full h-full">
            <nav className="flex w-2/5 bg-gray-800 text-gray-50 px-4 tex-gray-900 relative">
              <div className="mt-4 p-8">
                <div>
                  <label className="inline-flex items-center py-5">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2">Previsão do Tempo</span>
                  </label>  
                </div>
                <div>
                  <label className="inline-flex items-center py-5">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-green-500" />
                  <span className="ml-2">Câmbio</span>
                  </label>
                </div>
                <div>
                  <label className="inline-flex items-center py-5">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-pink-600" />
                  <span className="ml-2">Lista de Tarefas</span>
                  </label>
                </div>
              </div>
            </nav>
            <div className="w-full">
              <Wheather />
              <Exchange />
              <TaskList />
            </div>
          </div>
)}