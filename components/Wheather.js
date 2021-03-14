
export default function Wheather() {

  return (
    <div className="py-2">
      <article className="border-l-4 border-yellow-400 bg-yellow-50 sm:grid grid-cols-5 bg-white shadow-lg p-4 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-128.png" alt="Just a flower" className="w-full rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-xl font-bold">São Paulo, SP</h2>
          <label>38º</label>
          <img src="https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Thermometer_Cold-128.png" alt="Temperature" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
        <div className="justify-self-end">
          <img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-21-512.png" alt="Bookmark" className="w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}