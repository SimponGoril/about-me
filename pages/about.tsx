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
                  <li><span className='font-semibold'>Languages:</span> Czech 🇨🇿, English C1 🇬🇧, Spanish A1 🇪🇸</li>
                  <li><span className='font-semibold'>Driving licence:</span> B (Active driver) 🚗</li>
                  <li><span className='font-semibold'>Coffee licence:</span> V60 & Aeropress</li>
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
                  <li><span className='font-semibold'>Camping & Hiking</span> - from march till november, we camp in Krkonose (snow and rain included!)</li>
                  <li><span className='font-semibold'>Traveling</span> - I enjoyed visiting Japan 🇯🇵 3 times - Tokio, Osaka, Kyoto, Nara</li>
                  <li><span className='font-semibold'>Activites</span> - running, calistenics, boxing 🥊</li>
                  <li className='font-semibold'>Meditation</li>
                  <li>Taking care of our Gordonsetr Beris 🐶</li>
                  <li><span className='font-semibold'>Literature</span> - favourite book is One Day in the Life of Ivan Denisovich</li>
                  <li><span className='font-semibold'>Playing music</span> - I can play Maple Leaf Rag on piano, or funk around my TE Sub synth</li>
                  <li><span className='font-semibold'>Listening to music</span> - my taste is all over the place - from classical music, to czech rap, metal, electronica</li>
                  <li><span className='font-semibold'>Fine arts</span> - classical music, galleries, architecture, <a href="https://www.youtube.com/channel/UCePDFpCr78_qmVtpoB1Axaw">studing art online</a></li>
                  <li><span className='font-semibold'>Tea</span> - I love black teas, mainly from Darjeeling or Assam, but I always try taste something different 🫖</li>
                  <li><span className='font-semibold'>Coffee</span> - the less acidic, the better!</li>
                  <li><span className='font-semibold'>Podcasts</span> - Hardcore history, Harmontown, Lex Friedman, Proti Proudu, UKS, NoSleep podcast and many many more!</li>
                  <li><span className='font-semibold'>Movies</span> - everything from Villeneuve, Nolan, Refn, Jodorowsky</li>
                  <li><span className='font-semibold'>Games</span> - mostly just Playstation now, but I grow up with 386, PS1 and Gameboy</li>
                  <li><span className='font-semibold'>Philosophy</span> - since university, I try to devote some time reading mainstream authors - Jung, others</li>
                  <li><span className='font-semibold'>Tattoos</span> - only arms at the moment. Mix of motives: Maneki Neko, infinite knot, etc.</li>
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
