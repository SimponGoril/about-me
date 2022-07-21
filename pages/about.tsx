import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Menu from '../src/components/Menu'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Simon Moravec - About me</title>
      </Head>
      <Menu />
      <div className={"container lg:px-40 mx-auto font-mono"}>
        <main className='container pt-20'>
          <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>About me</h1>

          <div className="container px-10 mx-auto font-mono p-3">
            <div className="container bg-orange-100 p-5 rounded-3xl">
              <div className="container bg-orange-400 p-5 rounded-3xl">
                <h3 className="font-medium leading-tight text-2xl">Personal Skills</h3>
              </div>
              <div className='pt-3'>
                <ul className='pt-3 pl-3 list-disc list-inside'>
                  <li>Languages: Czech 🇨🇿, English C1 🇬🇧, Spanish A1 🇪🇸</li>
                  <li>Driving licence: B (Active driver) 🚗</li>
                  <li>Coffee licence: V60 & Aeropress</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container px-10 mx-auto font-mono p-3">
            <div className="container bg-orange-100 p-5 rounded-3xl">
              <div className="container bg-orange-400 p-5 rounded-3xl">
                <h3 className="font-medium leading-tight text-2xl">Hobbies</h3>
              </div>  
              <div>
                <ul className='pt-3 pl-3 list-disc list-inside'>
                  <li>Camping & Hiking - from march till november, we camp in Krkonose (snow and rain included!)</li>
                  <li>Traveling - I enjoyed visiting Japan 🇯🇵 3 times - Tokio, Osaka, Kyoto, Nara</li>
                  <li>Activites - running, calistenics, boxing 🥊</li>
                  <li>Meditation</li>
                  <li>Taking care of our Gordonsetr Beris 🐶</li>
                  <li>Literature - favourite book is One Day in the Life of Ivan Denisovich</li>
                  <li>Playing music - I can play Maple Leaf Rag on piano, or funk around my TE Sub synth</li>
                  <li>Listening to music - my taste is all over the place - from classical music, to czech rap, metal, electronica</li>
                  <li>Fine arts - classical music, galleries, architecture, <a href="https://www.youtube.com/channel/UCePDFpCr78_qmVtpoB1Axaw">studing art online</a></li>
                  <li>Tea - I love black teas, mainly from Darjeeling or Assam, but I always try taste something different 🫖</li>
                  <li>Coffee - the less acidic, the better!</li>
                  <li>Movies - everything from Villeneuve, Nolan, Refn, Jodorowsky</li>
                  <li>Games - mostly just Playstation now, but I grow up with 386, PS1 and Gameboy</li>
                  <li>Philosophy - since university, I try to devote some time reading mainstream authors - Jung, others</li>
                  <li>Tattoo - still in progress...</li>
                </ul>    
                <div className='flex items-center justify-center pt-5'>
                  <Image width="477" height="636" src="/me.jpg" alt="Hi, its me, Simon" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default About
