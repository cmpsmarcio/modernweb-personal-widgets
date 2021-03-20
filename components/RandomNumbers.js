export default function RandomNumbers() {

  function getRandomArbitrary(min, max) {
    return Math.round( Math.random() * (max - min) + min);
  }

  return (
    <div className="py-2" >
      <article className="border-l-4 border-green-400 bg-green-100 sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://pbs.twimg.com/profile_images/52033036/av_400x400.png" alt="Music simbol" className="w-full rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-xl font-bold">Número aleatórios, talvez números da sorte</h2>
          <div className="float-left px-2 py-5">  
            <img src="https://e7.pngegg.com/pngimages/439/430/png-clipart-musical-note-eighth-note-miscellaneous-music-symbols.png" alt="music-simbol" title="Simbolo musical" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
            <label>{getRandomArbitrary(1, 60)} - </label>
            <label>{getRandomArbitrary(1, 60)} - </label>
            <label>{getRandomArbitrary(1, 60)} - </label>
            <label>{getRandomArbitrary(1, 60)} - </label>
            <label>{getRandomArbitrary(1, 60)} - </label>
            <label>{getRandomArbitrary(1, 60)}</label>
          </div>
        </div>
        <div className="justify-self-end">
          <img src="https://e7.pngegg.com/pngimages/753/938/png-clipart-dollar-sign-united-states-dollar-dollar-saving-text.png" alt="Bookmark" className="w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}