import { useState } from 'react'

export default function Weather() {
  const [weather, setWeather] = useState({temp: 0, description: ''})
  const [city, setCity] = useState('São Paulo,SP')
  const [load, setLoad] = useState(true)
  const [erro, setErro] = useState(false)

  function getWeather() {
    load && setLoad(false)
  
    fetch(encodeURI(`http://localhost:3000/api/weather?city=${arrumaCidade()}`))
    .then(res => res.json())
    .then(data => { 
      setWeather(data)
    })
  }

  function arrumaCidade() {
    const [cidade, uf] = city.split(',')
    return `${cidade.trim()},${uf.trim()}`
  }

  function isValidCity() {
    const [cidade, uf] = city.split(',')
    if (!cidade || !uf) 
      return false 
    if (uf.trim().length !== 2 || cidade.trim().length < 3) 
      return false 
    
    return true
  }

  function onKeyDown (e) {
    if (e.key === 'Enter') {
      if (!isValidCity()) {
        setErro(true)
        return 
      }

      getWeather()
      setErro(false)
    }
  }

  function handleTextChange({target}) {
    setCity(target.value)
  }
  
  return (
    <div className="py-2">
      {load && getWeather()}
      <article className="border-l-4 border-yellow-400 bg-yellow-50 sm:grid grid-cols-5 bg-white shadow-lg p-4 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-128.png" alt="Just a flower" className="lg:w-full md:w-5/12 sm:w-5/12 w-0 rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <label htmlFor="inputCity" className="text-xs italic">Cidade,UF ex.: Campinas,SP e tecle enter</label>
          {erro && <p className="text-xs text-red-500 italic">Cidade inválida</p>}
          <div><input id="inputCity" type='text' className="flex-none mb-3 text-gray-800 capitalize text-sm md:text-base lg:text-xl font-bold" onKeyDown={onKeyDown} onChange={handleTextChange} defaultValue={city}></input></div>
          <label>{weather.temp}º</label>
          <img src="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-128.png" alt="Temperature" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
          <label className="text-sm">&nbsp;{weather.description}</label>
        </div>
        <div className="justify-self-end">
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-21-512.png" alt="Bookmark" className="w-4 sm:w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}