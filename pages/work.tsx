import type { NextPage } from 'next';
import JobTile from '../src/components/jobTile';
import { WorkExperience } from '../src/types';
import Menu from '../src/components/menu';
import dynamic from 'next/dynamic';
import cv from '../public/cv.json';
import Head from 'next/head';
import { useState } from 'react';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

type WorkProps = {
  jobs: WorkExperience[]
}

const Work: NextPage<WorkProps> = ({ jobs }) => {
  const [isPrettyPrinted, setIsPrettyPrinted] = useState<boolean>(false)
  const getJobTiles = () => {
    return jobs.map((j, i) => {
      return <JobTile key={i} job={j} />
    })
  }

  return (
    <>
      <Head>
        <title>Hi, I am Simon - Work Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className='container'>
        <div className='lg:px-40 mx-auto pt-20'>
          <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>Work Experience</h1>
          <div className='flex justify-center content-center flex-col noprint'>
            <div className='container'><h2 className="text-3xl font-extrabold sm:text-3xl text-center">CV.json</h2></div>
            <div className='container flex justify-center py-5'>
              <DynamicReactJson style={{width: "100%"}} 
                                src={cv} 
                                name="curriculum vitae" 
                                shouldCollapse={(field) => { return field.type === 'array' }} 
                                displayDataTypes={false} 
                                displayObjectSize={false} 
                                enableClipboard={false} 
                                quotesOnKeys={false} 
                                theme={'summerfruit'} 
                                indentWidth={2} />
            </div>
          </div>
          {!isPrettyPrinted && <div className="flex justify-center">
            <button onClick={() => setIsPrettyPrinted(true)} 
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Pretty print?
            </button>
          </div>
          }
          {isPrettyPrinted && getJobTiles()}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context: WorkProps) {
  return {
    props: {
      jobs: cv.work_experience
    },
  }
}

export default Work
