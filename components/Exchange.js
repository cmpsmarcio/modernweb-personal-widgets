export default function Exchange() {

  return (
    <div className="py-2" >
      <article className="border-l-4 border-green-400 bg-green-100 sm:grid grid-cols-5 bg-white shadow-lg p-7 relative lg:mx-auto sm:p-4 rounded-lg lg:col-span-2 lg:ml-20" >
        <img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Money-Graph-128.png" alt="Just a flower" className="w-full rounded-lg" />
        <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
          <h2 className="text-gray-800 capitalize text-xl font-bold">Cotação</h2>
          <div className="float-left px-2 py-5">  
            <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/us_dollar-128.png" alt="dólar" title="Dólar" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
            <label>6.09</label>
          </div>
          <div className="float-left px-2 py-5">
            <label>7.01</label>
            <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_euro_symbol_48px-128.png" alt="euro" title="Euro" className="float-left w-8 h-6 top-3 right-3 sm:relative sm:top-0 sm:right-0" />
          </div>
        </div>
        <div className="justify-self-end">
          <img src="https://cdn4.iconfinder.com/data/icons/success-filloutline/64/save-money-coin-piggy_bank-deposit-128.png" alt="Bookmark" className="w-8 absolute top-3 right-3 sm:relative sm:top-0 sm:right-0" />
        </div>
      </article>
    </div>
  )
}