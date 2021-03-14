import Head from 'next/head'
import Main from '../components/Main.js'
import Header from '../components/Header.js'

export default function Home() {
  return (
    <div className="container mx-auto lg:max-w-5xl md:mx-auto">
      <Head>
        <title>Widgets</title>
      </Head>
      <div >
        <Header />
        <Main />
      </div>
    </div>
  )
}
