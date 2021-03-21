import { useEffect, useState } from "react"

export default function RandomNumbers() {
  const [numbers, setNumbers] = useState('')
  const [load, setLoad] = useState(true)

  function getLuckyNumbers(min, max, limit) {
    load && setLoad(false)

    let luckyNumbers = ''
    for (let i = 1; i <= limit; i++) {
      luckyNumbers += `${Math.round( Math.random() * (max - min) + min)}${i === limit ? '' : '-'}`
    }
    return luckyNumbers
  }

  useEffect(() => {
    load && setNumbers(getLuckyNumbers(1, 60, 6))
  })

  return (
    <div className="py-2" >
      <article className="border-l-4 border-green-400 bg-green-100 sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://pbs.twimg.com/profile_images/52033036/av_400x400.png" alt="Music simbol" className="lg:w-full md:w-5/12 sm:w-5/12 w-0 rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-sm md:text-base lg:text-xl font-bold pb-4 italic text-gray-800 capitalize font-bold">Números da sorte</h2>
          <div className="float-none text-xs sm:text-base px-2 py-5">  
            <img src="https://e7.pngegg.com/pngimages/439/430/png-clipart-musical-note-eighth-note-miscellaneous-music-symbols.png" alt="music-simbol" title="Simbolo musical" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
            <label>{numbers}</label>
          </div>
        </div>
        <div className="justify-self-end">
          <img src="https://e7.pngegg.com/pngimages/753/938/png-clipart-dollar-sign-united-states-dollar-dollar-saving-text.png" alt="Bookmark" className="w-4 sm:w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}