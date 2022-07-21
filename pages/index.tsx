import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../src/components/Menu'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Moravec - Personal Page</title>
        <meta name="description" content="Personal portfoilo of Simon Moravec, web developer specializing on TypeScriptJavascript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div className={"container lg:px-40 mx-auto font-mono"}>
        <main className='container'>
          <div className="container flex justify-center content-center mt-20 bg-orange-100 p-10 rounded-2xl">
            <Link href="/">
              <div className="container portrait">
              </div>
            </Link>
            <div className='container pl-3'>
              <div>
                <h1 className='font-medium leading-tight text-5xl mt-0 mb-2'>Simon Moravec</h1>
                <div>
                  <a className='underline hover:no-underline' href="https://www.linkedin.com/in/simonmoravec">Linkedin</a> | <a className='underline hover:no-underline' href="https://github.com/SimponGoril">Github</a>
                </div>
                <p className='mt-2'>Hi, I am Simon 👋, a Software Developer based in Prague 🇨🇿 and a part of CAT team at Concur 🐱</p>
                <p>Currently we are working on AWS Cloud compliance & health tools. My former projects were for Broadcom, O2 and others.
                   Outside of this, I code <a className="underline" target="_blank" rel="noreferrer" href="http://public-bucket-hosting.s3-website.eu-central-1.amazonaws.com/">random cool stuff</a> or <a className="underline" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=E0eSixPusN0">prototype on my RaspberryPi</a></p> 
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
